// function generateJobListings(numListings) {
//   const roles = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Scientist",
//     "DevOps Engineer",
//     "UI/UX Designer",
//     "Machine Learning Engineer",
//     "Cloud Architect",
//     "Product Manager",
//     "Mobile Developer",
//     "Cybersecurity Analyst",
//     "Full Stack Developer",
//     "QA Engineer",
//     "Systems Administrator",
//     "Technical Support Engineer",
//     "Database Administrator",
//   ];

//   const locations = [
//     "San Francisco, CA",
//     "Remote",
//     "New York, NY",
//     "Austin, TX",
//     "Seattle, WA",
//     "Chicago, IL",
//     "Boston, MA",
//     "Denver, CO",
//     "Washington, D.C.",
//     "Los Angeles, CA",
//   ];

//   const categories = [
//     "Software Development",
//     "Data Science",
//     "Infrastructure",
//     "Design",
//     "Artificial Intelligence",
//     "Product Management",
//     "Security",
//     "Support",
//   ];

//   const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
//   const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

//   const jobListings = Array.from({ length: numListings }, (_, index) => ({
//     role: getRandomElement(roles),
//     salary: `$${60 + Math.floor(Math.random() * 80)}k - $${
//       90 + Math.floor(Math.random() * 100)
//     }k`,
//     jobType: getRandomElement(jobTypes),
//     location: getRandomElement(locations),
//     category: getRandomElement(categories),
//   }));

//   return jobListings;
// }

// // Generate 100 job listings
// export const techJobs = generateJobListings(100);
// console.log(techJobs);
