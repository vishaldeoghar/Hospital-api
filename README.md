# Hospital-api
API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

Setup the Project
1. Clone or Download the Repo.
2. cd Hospital-api goto the Repo using Terminal.
3. Run npm install express mongoose bcrypt
4. Run npm start to ignite the project.
5. Use Postman to test the api.

Routes
1. Register a Doctor: [POST]: /doctors/register
2. Login for Doctor: [POST]: /doctors/login
3. Register a patient: [POST]: /patients/register
4. Create Patient report: [POST]: /patients/:id/create_report
5. Fetch All Reports of a Patient [GET]: /patients/:id/all_reports
6. Fetch All Reports Based on a Status: [GET]: /reports/:status
