SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, EXTRACT(assistance_requests.comleted_at-assistance_requests.started_at) as duration
FROM assistance_requests
JOIN teachers ON assitance_requests.teacher_id = teachers.id
JOIN students ON assitance_requests.student_id = students.id
JOIN assignments ON assistance_requests.assignment_id = assignment id;
ORDER BY duration