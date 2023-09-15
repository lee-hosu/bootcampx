// database connection
const { Pool } = require('pg');

// Configure database connection
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

// Test the database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database');
//     console.log('Current date and time from the database:', res.rows[0].now);
//   }

//   // Close the database connection
//   pool.end();
// });

// pool
//   .query(
//     `
//   SELECT students.id as student_id, students.name as name, cohorts.name as cohort
//   FROM students
//   JOIN cohorts ON cohorts.id = cohort_id
//   LIMIT 5;
//   `
//   )
//   .then((res) => {
//     res.rows.forEach((user) => {
//       console.log(
//         `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
//       );
//     });
//   });

pool
  .query(
    `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`
  )
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error('query error', err.stack));
