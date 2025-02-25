const connection= require("../data/db")

//INDEX
const index=(req, res) =>{
    const sql = "SELECT * FROM movie"
    connection.execute(sql, (err, results) => {
        if (err) {
          return res.status(500).json({
            error: "Query Error",
            message: `Database query failed: ${sql}`,
          });
        }
    
        res.json(results);
      });
}
//SHOW
const show = (req, res) => {
    // ID ROTTA
    const { id } = req.params;
  
    const movieSql = `
      SELECT * 
      FROM movie
      WHERE id = ?`;
    connection.execute(movieSql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({
          error: "Query Error",
          message: `Database query failed: ${movieSql}`,
        });
      }
  
      
      const movie = results[0];
  
      if (!movie) {
        return res.status(404).json({
          error: "Not found",
          message: "movie not found",
        });
      }
  
      // RECUPERO RECENSIONI
      const reviewsSql = `
      SELECT * 
      FROM reviews
      WHERE movie_id = ?`;
  
      connection.execute(reviewsSql, [id], (err, results) => {
        if (err) {
          return res.status(500).json({
            error: "Query Error",
            message: `Database query failed: ${reviewsSql}`,
          });
        }
         movie.reviews = results;
        res.json(movie);
      });
    });
  };
  
//DESTROY
const destroy=(req, res) =>{}
module.exports= {index, show, destroy}