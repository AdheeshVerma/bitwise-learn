## BitwiseLearn – Centralized Learning & Institution Management Platform

---

### 1. Executive Summary

BitwiseLearn is a full-stack, web-based learning and institution management platform developed to digitize and streamline administrative and academic operations within educational organizations. The platform provides a centralized system for managing users, students, batches, vendors, and institutes while enforcing strict role-based access control to ensure security and data integrity.
The project is designed with scalability, modularity, and maintainability as core principles. By leveraging modern web technologies and industry-standard architectural patterns, BitwiseLearn offers a robust solution that can adapt to the evolving needs of educational institutions.

### 2. Project Objectives

The primary objectives of BitwiseLearn are:

- To design and implement a centralized platform for managing institutional data
- To provide secure authentication and authorization using role-based access control
- To simplify student, batch, vendor, and institute management through structured workflows
- To ensure scalability and maintainability through modular backend architecture
- To deliver a responsive and user-friendly interface for administrative operations

```
Directory structure:
└── bitwiselearn20-bitwise-learn/
    ├── README.md
    ├── docker-compose.backend.yml
    ├── docker-compose.frontend.yml
    ├── docker-compose.service-worker.yml
    ├── docker-compose.yml
    ├── package.json
    ├── turbo.json
    ├── .dockerignore
    ├── .npmrc
    ├── apps/
    │   ├── client/
    │   │   ├── README.md
    │   │   ├── eslint.config.mjs
    │   │   ├── next.config.ts
    │   │   ├── package.json
    │   │   ├── postcss.config.mjs
    │   │   ├── tsconfig.json
    │   │   ├── .dockerignore
    │   │   └── src/
    │   │       ├── proxy.ts
    │   │       ├── api/
    │   │       │   ├── handleLogin.tsx
    │   │       │   ├── admins/
    │   │       │   │   ├── create-admin.tsx
    │   │       │   │   ├── get-admin-stats.tsx
    │   │       │   │   └── get-all-admins.tsx
    │   │       │   ├── assessments/
    │   │       │   │   ├── create-assessment-section.ts
    │   │       │   │   ├── create-assessments.ts
    │   │       │   │   ├── create-question.ts
    │   │       │   │   ├── delete-assessment-question.ts
    │   │       │   │   ├── delete-assessment-section.ts
    │   │       │   │   ├── delete-assessment.ts
    │   │       │   │   ├── get-all-assessments.ts
    │   │       │   │   ├── get-all-sections.ts
    │   │       │   │   ├── get-assessment-by-id.ts
    │   │       │   │   ├── get-assessments-by-batch.ts
    │   │       │   │   ├── get-section-questions.ts
    │   │       │   │   ├── publish-assessment.ts
    │   │       │   │   ├── report-request.ts
    │   │       │   │   ├── submit-assessment.ts
    │   │       │   │   ├── update-assessment-question.ts
    │   │       │   │   └── update-assessment-section.ts
    │   │       │   ├── auth/
    │   │       │   │   ├── forgot-password.ts
    │   │       │   │   ├── reset-password.ts
    │   │       │   │   └── verifyForgotPassword.ts
    │   │       │   ├── batches/
    │   │       │   │   ├── create-batch.tsx
    │   │       │   │   ├── create-batches.tsx
    │   │       │   │   ├── get-all-batches.tsx
    │   │       │   │   └── get-batch-by-id.tsx
    │   │       │   ├── contact/
    │   │       │   │   └── sendComplaint.ts
    │   │       │   ├── courses/
    │   │       │   │   ├── assignment/
    │   │       │   │   │   ├── add-assignment-to-section.ts
    │   │       │   │   │   ├── delete-assignment.ts
    │   │       │   │   │   ├── get-assignment-by-id.ts
    │   │       │   │   │   ├── get-section-assignments.ts
    │   │       │   │   │   ├── get-student-section-assignment.ts
    │   │       │   │   │   ├── submit-assignment.ts
    │   │       │   │   │   └── update-assignment.ts
    │   │       │   │   ├── assignment-questions/
    │   │       │   │   │   ├── add-question.ts
    │   │       │   │   │   ├── delete-question.ts
    │   │       │   │   │   └── update-question.ts
    │   │       │   │   ├── course/
    │   │       │   │   │   ├── course-progress-by-id.ts
    │   │       │   │   │   ├── course-progress.ts
    │   │       │   │   │   ├── create-course.ts
    │   │       │   │   │   ├── delete-course-by-id.ts
    │   │       │   │   │   ├── get-all-course-progress.ts
    │   │       │   │   │   ├── get-all-courses.ts
    │   │       │   │   │   ├── get-course-by-id.ts
    │   │       │   │   │   ├── publish-course.ts
    │   │       │   │   │   ├── update-course.ts
    │   │       │   │   │   ├── upload-certificate.ts
    │   │       │   │   │   ├── upload-thumbnail.ts
    │   │       │   │   │   └── enrollments/
    │   │       │   │   │       ├── enroll-institution.ts
    │   │       │   │   │       ├── get-all-batch-courses.ts
    │   │       │   │   │       └── get-all-enrollment.ts
    │   │       │   │   └── section/
    │   │       │   │       ├── add-content-to-section.ts
    │   │       │   │       ├── create-section.ts
    │   │       │   │       ├── delete-content-from-section.ts
    │   │       │   │       ├── delete-section.ts
    │   │       │   │       ├── get-section.ts
    │   │       │   │       ├── update-content-to-section.ts
    │   │       │   │       └── upload-transcript.ts
    │   │       │   ├── health/
    │   │       │   │   ├── health.ts
    │   │       │   │   └── health.tsx
    │   │       │   ├── institutions/
    │   │       │   │   ├── create-institution.tsx
    │   │       │   │   ├── entity.tsx
    │   │       │   │   ├── get-all-institutions.tsx
    │   │       │   │   ├── get-institute-by-id.tsx
    │   │       │   │   └── get-institutions-by-vendor.tsx
    │   │       │   ├── listed-courses/
    │   │       │   │   └── listed-courses.ts
    │   │       │   ├── problems/
    │   │       │   │   ├── change-status.tsx
    │   │       │   │   ├── create-admin-problem.tsx
    │   │       │   │   ├── create-solution.tsx
    │   │       │   │   ├── create-template.tsx
    │   │       │   │   ├── create-testcase.tsx
    │   │       │   │   ├── create-topic.tsx
    │   │       │   │   ├── delete-testcase.tsx
    │   │       │   │   ├── get-all-problems.tsx
    │   │       │   │   ├── get-all-submission.tsx
    │   │       │   │   ├── get-all-template.tsx
    │   │       │   │   ├── get-all-testcases.tsx
    │   │       │   │   ├── get-individual-problem.tsx
    │   │       │   │   ├── get-problem-count.tsx
    │   │       │   │   ├── get-problem-solution.tsx
    │   │       │   │   ├── load-profile.tsx
    │   │       │   │   ├── run-code.tsx
    │   │       │   │   ├── search-problem.tsx
    │   │       │   │   ├── update-problem.tsx
    │   │       │   │   ├── update-solution.tsx
    │   │       │   │   ├── update-tempate.tsx
    │   │       │   │   └── update-testcase.tsx
    │   │       │   ├── reports/
    │   │       │   │   ├── get-assessment-report.tsx
    │   │       │   │   ├── get-full-report.tsx
    │   │       │   │   └── get-student-data.tsx
    │   │       │   ├── students/
    │   │       │   │   ├── create-student.tsx
    │   │       │   │   ├── get-all-students.tsx
    │   │       │   │   └── get-students-by-batch.tsx
    │   │       │   ├── teachers/
    │   │       │   │   ├── create-teacher.tsx
    │   │       │   │   ├── get-all-teachers.tsx
    │   │       │   │   ├── get-teachers-by-batch.tsx
    │   │       │   │   └── get-teachers-by-institute.tsx
    │   │       │   └── vendors/
    │   │       │       ├── create-vendors.tsx
    │   │       │       ├── get-all-vendors.tsx
    │   │       │       ├── get-vendor-by-id.tsx
    │   │       │       └── get-vendor-dashboard.tsx
    │   │       ├── app/
    │   │       │   ├── globals.css
    │   │       │   ├── layout.tsx
    │   │       │   ├── page.tsx
    │   │       │   ├── (Login Pages)/
    │   │       │   │   ├── admin-login/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── multi-login/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   └── page.tsx
    │   │       │   │   └── student-login/
    │   │       │   │       ├── loading.tsx
    │   │       │   │       └── page.tsx
    │   │       │   ├── about/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   ├── admin-dashboard/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   ├── admins/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── assessments/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   └── [id]/
    │   │       │   │   │       ├── loading.tsx
    │   │       │   │   │       └── page.tsx
    │   │       │   │   ├── batches/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   └── [batchId]/
    │   │       │   │   │       ├── loading.tsx
    │   │       │   │   │       └── page.tsx
    │   │       │   │   ├── compiler/
    │   │       │   │   │   └── page.tsx
    │   │       │   │   ├── courses/
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   └── [id]/
    │   │       │   │   │       └── page.tsx
    │   │       │   │   ├── institutions/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   └── [institutionId]/
    │   │       │   │   │       ├── loading.tsx
    │   │       │   │   │       └── page.tsx
    │   │       │   │   ├── problems/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   └── [id]/
    │   │       │   │   │       ├── loading.tsx
    │   │       │   │   │       └── page.tsx
    │   │       │   │   ├── reports/
    │   │       │   │   │   ├── loading.tsx
    │   │       │   │   │   ├── page.tsx
    │   │       │   │   │   ├── assessment/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       ├── loading.tsx
    │   │       │   │   │   │       └── page.tsx
    │   │       │   │   │   └── courses/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           ├── loading.tsx
    │   │       │   │   │           ├── page.tsx
    │   │       │   │   │           └── [batchId]/
    │   │       │   │   │               ├── loading.tsx
    │   │       │   │   │               └── page.tsx
    │   │       │   │   └── vendors/
    │   │       │   │       ├── loading.tsx
    │   │       │   │       ├── page.tsx
    │   │       │   │       └── [vendorId]/
    │   │       │   │           ├── loading.tsx
    │   │       │   │           └── page.tsx
    │   │       │   ├── api/
    │   │       │   │   ├── admin/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── admins/
    │   │       │   │   │   │   ├── [id]/
    │   │       │   │   │   │   │   ├── delete/
    │   │       │   │   │   │   │   │   └── route.ts
    │   │       │   │   │   │   │   └── update/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   └── create-admin/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── batch/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       ├── delete/
    │   │       │   │   │   │       │   └── route.ts
    │   │       │   │   │   │       └── update/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── change-status/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── create-problem/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-solution/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── create-template/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── create-testcase/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── create-topic/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-problem/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-testcase/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-admin-stats/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── get-problem/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── institution/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       ├── delete/
    │   │       │   │   │   │       │   └── route.ts
    │   │       │   │   │   │       └── update/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── search-problem/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── student/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       ├── delete/
    │   │       │   │   │   │       │   └── route.ts
    │   │       │   │   │   │       └── update/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── teacher/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       ├── delete/
    │   │       │   │   │   │       │   └── route.ts
    │   │       │   │   │   │       └── update/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── update-problem/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── update-solution/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── update-template/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── update-testcase/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   └── update-topic/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── assessment-report/
    │   │       │   │   │   └── [id]/
    │   │       │   │   │       └── route.ts
    │   │       │   │   ├── assessments/
    │   │       │   │   │   ├── create-assessment/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-assessment-section/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-question/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-assessment/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-assessment-question/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-assessment-section/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-all-assessments/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── get-all-batch-assessments/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-all-sections/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-assessment-by-id/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-by-batch/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-by-institution/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-institute-assessments/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-section-questions/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── publish-assessment/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── submit/
    │   │       │   │   │   │   ├── [id]/
    │   │       │   │   │   │   │   └── route.ts
    │   │       │   │   │   │   └── question/
    │   │       │   │   │   │       └── [id]/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── update-assessment-question/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   └── update-assessment-section/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── auth/
    │   │       │   │   │   ├── forgot-password/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── logout/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── reset-password/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   └── verify-forgot-password/
    │   │       │   │   │       └── route.ts
    │   │       │   │   ├── batch/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── [id]/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-batch/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   └── get-batches-for-institution/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── compile/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── contact/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── course/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── add-content-by-sectionId/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── assignment/
    │   │       │   │   │   │   ├── add-assignment-to-section/
    │   │       │   │   │   │   │   └── route.ts
    │   │       │   │   │   │   ├── delete-assignment/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   ├── get/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   ├── get-all-section-assignments/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   ├── get-student-section-assignments/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   ├── submit/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   └── update-assignment/
    │   │       │   │   │   │       └── [id]/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── assignment-question/
    │   │       │   │   │   │   ├── add/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   ├── delete/
    │   │       │   │   │   │   │   └── [id]/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   └── update/
    │   │       │   │   │   │       └── [id]/
    │   │       │   │   │   │           └── route.ts
    │   │       │   │   │   ├── change-status/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── create-course/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-enrollment/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-section/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-content-from-section/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-course/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── delete-section/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── enrollments/
    │   │       │   │   │   │   ├── [id]/
    │   │       │   │   │   │   │   ├── route.ts
    │   │       │   │   │   │   │   └── delete/
    │   │       │   │   │   │   │       └── route.ts
    │   │       │   │   │   │   └── institute/
    │   │       │   │   │   │       └── [institutionId]/
    │   │       │   │   │   │           └── [id]/
    │   │       │   │   │   │               └── route.ts
    │   │       │   │   │   ├── get-all-course-progress/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── get-course-by-id/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-course-progress/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-enrollment-by-batch/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-section-by-courseId/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── get-student-courses/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── institute/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── publish-course/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── update-content-by-sectionId/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── update-course/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── upload-certificate/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── upload-thumbnail/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   └── upload-transcript/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── full-assessment-report/
    │   │       │   │   │   └── [id]/
    │   │       │   │   │       └── route.ts
    │   │       │   │   ├── get-problem/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── [id]/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── count/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── solution/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── submission/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   ├── template/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   └── testcases/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── health/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── institution/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── [id]/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-institution/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   └── vendor-institutions/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── listed-courses/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── login/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── logs/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── problem/
    │   │       │   │   │   └── profile/
    │   │       │   │   │       └── route.ts
    │   │       │   │   ├── reports/
    │   │       │   │   │   ├── assessment-report/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   └── course-report/
    │   │       │   │   │       └── route.ts
    │   │       │   │   ├── run/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── student/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── [id]/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-student/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   └── get-by-batch/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   ├── submit/
    │   │       │   │   │   └── route.ts
    │   │       │   │   ├── teacher/
    │   │       │   │   │   ├── route.ts
    │   │       │   │   │   ├── [id]/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── create-teacher/
    │   │       │   │   │   │   └── route.ts
    │   │       │   │   │   ├── get-by-batch/
    │   │       │   │   │   │   └── [id]/
    │   │       │   │   │   │       └── route.ts
    │   │       │   │   │   └── get-by-institute/
    │   │       │   │   │       └── [id]/
    │   │       │   │   │           └── route.ts
    │   │       │   │   └── upload/
    │   │       │   │       ├── route.ts
    │   │       │   │       └── [id]/
    │   │       │   │           └── route.ts
    │   │       │   ├── assessments/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── [id]/
    │   │       │   │       ├── loading.tsx
    │   │       │   │       └── page.tsx
    │   │       │   ├── attempt/
    │   │       │   │   └── page.tsx
    │   │       │   ├── blog/
    │   │       │   │   └── page.tsx
    │   │       │   ├── compiler/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   ├── contact/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   ├── courses/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── [id]/
    │   │       │   │       ├── loading.tsx
    │   │       │   │       ├── page.tsx
    │   │       │   │       ├── assignment/
    │   │       │   │       │   └── [assignmentId]/
    │   │       │   │       │       ├── loading.tsx
    │   │       │   │       │       ├── page.tsx
    │   │       │   │       │       └── attempt/
    │   │       │   │       │           ├── loading.tsx
    │   │       │   │       │           └── page.tsx
    │   │       │   │       └── studyMode/
    │   │       │   │           ├── loading.tsx
    │   │       │   │           └── page.tsx
    │   │       │   ├── dashboard/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   ├── institution-dashboard/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   ├── listed-courses/
    │   │       │   │   └── page.tsx
    │   │       │   ├── our-services/
    │   │       │   │   └── page.tsx
    │   │       │   ├── problems/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   ├── page.tsx
    │   │       │   │   └── [id]/
    │   │       │   │       ├── loading.tsx
    │   │       │   │       └── page.tsx
    │   │       │   ├── teacher-dashboard/
    │   │       │   │   ├── loading.tsx
    │   │       │   │   └── page.tsx
    │   │       │   └── vendor-dashboard/
    │   │       │       ├── loading.tsx
    │   │       │       └── page.tsx
    │   │       ├── component/
    │   │       │   ├── (admin-course-pages)/
    │   │       │   │   ├── add-assignment/
    │   │       │   │   │   ├── AddAssignment.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       ├── AddAssignmentV1.tsx
    │   │       │   │   │       ├── assignment.css
    │   │       │   │   │       ├── AssignmentInfo.tsx
    │   │       │   │   │       ├── QuestionEditor.tsx
    │   │       │   │   │       ├── QuestionEditorWrapper.tsx
    │   │       │   │   │       └── QuestionNavigation.tsx
    │   │       │   │   ├── add-question/
    │   │       │   │   │   ├── AddQuestion.tsx
    │   │       │   │   │   └── V1/
    │   │       │   │   │       ├── AddCodeQuestion.tsx
    │   │       │   │   │       ├── AddMCQ.tsx
    │   │       │   │   │       └── AddQuestionV1.tsx
    │   │       │   │   ├── add-section/
    │   │       │   │   │   ├── AddSection.tsx
    │   │       │   │   │   ├── v1/
    │   │       │   │   │   │   ├── AddSectionV1.tsx
    │   │       │   │   │   │   └── helper.css
    │   │       │   │   │   └── v2/
    │   │       │   │   │       └── AddSectionV2.tsx
    │   │       │   │   ├── course-builder/
    │   │       │   │   │   ├── CourseBuilder.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── CourseBuilderV1.tsx
    │   │       │   │   ├── course-form/
    │   │       │   │   │   ├── CourseForm.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── CourseFormV1.tsx
    │   │       │   │   └── publish-course/
    │   │       │   │       ├── PublishCourse.tsx
    │   │       │   │       └── v1/
    │   │       │   │           └── PublishCourseV1.tsx
    │   │       │   ├── (Login Pages)/
    │   │       │   │   ├── admin-login/
    │   │       │   │   │   ├── AdminLogin.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── AdminLoginV1.tsx
    │   │       │   │   ├── multi-login/
    │   │       │   │   │   ├── MultiLogin.tsx
    │   │       │   │   │   └── V1/
    │   │       │   │   │       └── MultiLoginV1.tsx
    │   │       │   │   └── student-login/
    │   │       │   │       ├── StudentLogin.tsx
    │   │       │   │       └── v1/
    │   │       │   │           ├── ForgotPasswordForm.tsx
    │   │       │   │           ├── OtpForm.tsx
    │   │       │   │           ├── ResetPasswordForm.tsx
    │   │       │   │           └── StudentLoginV1.tsx
    │   │       │   ├── about/
    │   │       │   │   ├── About.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AboutHeader.tsx
    │   │       │   │       ├── AboutV1.tsx
    │   │       │   │       └── EdTechFocus.tsx
    │   │       │   ├── admin-compiler/
    │   │       │   │   ├── Compiler.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── CodeCompiler.tsx
    │   │       │   │       └── CompilerV1.tsx
    │   │       │   ├── admin-dashboard/
    │   │       │   │   ├── AdminDashboard.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── AdminDashboardV1.tsx
    │   │       │   │       ├── EntityDetailModal.tsx
    │   │       │   │       └── HeroSection.tsx
    │   │       │   ├── AdminCourses/
    │   │       │   │   ├── AdminCourses.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AdminCoursesV1.tsx
    │   │       │   │       ├── CourseCard.tsx
    │   │       │   │       └── RightSection.tsx
    │   │       │   ├── AdminProblem/
    │   │       │   │   ├── AdminProblem.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AddSolution.tsx
    │   │       │   │       ├── AllTestCases.tsx
    │   │       │   │       ├── ProblemDescrption.tsx
    │   │       │   │       ├── ProblemInfo.tsx
    │   │       │   │       ├── ProblemTrial.tsx
    │   │       │   │       ├── ShowAddTemplateForm.tsx
    │   │       │   │       ├── Solution.tsx
    │   │       │   │       ├── Submissions.tsx
    │   │       │   │       ├── Templates.tsx
    │   │       │   │       ├── TestCaseForm.tsx
    │   │       │   │       └── V1AdminProblem.tsx
    │   │       │   ├── AllAdmins/
    │   │       │   │   ├── AllAdmins.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AdminForm.tsx
    │   │       │   │       ├── DashboardInfo.tsx
    │   │       │   │       ├── V1AllAdmins.tsx
    │   │       │   │       └── VendorForm.tsx
    │   │       │   ├── AllBatches/
    │   │       │   │   ├── AllBatches.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── DashboardInfo.tsx
    │   │       │   │       ├── V1AllBatches.tsx
    │   │       │   │       └── VendorForm.tsx
    │   │       │   ├── AllInstitutions/
    │   │       │   │   ├── AllInstitutions.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── DashboardInfo.tsx
    │   │       │   │       ├── EntityDetailModel.tsx
    │   │       │   │       ├── InstitutionForm.tsx
    │   │       │   │       └── V1AllInstitutions.tsx
    │   │       │   ├── AllQuestions/
    │   │       │   │   ├── AllQuestions.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AllListedQuestions.tsx
    │   │       │   │       ├── Filter.tsx
    │   │       │   │       ├── OnGoingingCourses.tsx
    │   │       │   │       ├── QuestionCard.tsx
    │   │       │   │       ├── QuestionInforSidebar.tsx
    │   │       │   │       └── V1AllComponents.tsx
    │   │       │   ├── AllVendors/
    │   │       │   │   ├── AllVendors.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── DashboardInfo.tsx
    │   │       │   │       ├── V1AllVendors.tsx
    │   │       │   │       └── VendorForm.tsx
    │   │       │   ├── AssessmentBuilder/
    │   │       │   │   ├── AssessmentBuilder.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AddCODEAssessmentQuestion.tsx
    │   │       │   │       ├── AddMCQAssessmentQuestion.tsx
    │   │       │   │       └── AssessmentBuilderV1.tsx
    │   │       │   ├── Assessments/
    │   │       │   │   ├── Assessments.tsx
    │   │       │   │   └── V1/
    │   │       │   │       └── AssessmentsV1.tsx
    │   │       │   ├── assignment/
    │   │       │   │   ├── Assignment.tsx
    │   │       │   │   ├── DummyData/
    │   │       │   │   │   ├── dummyData.tsx
    │   │       │   │   │   └── dummyTypes.tsx
    │   │       │   │   ├── v1/
    │   │       │   │   │   └── AssignmentV1.tsx
    │   │       │   │   └── v2/
    │   │       │   │       ├── AssignmentCard.tsx
    │   │       │   │       └── AssignmentV2.tsx
    │   │       │   ├── attempt/
    │   │       │   │   ├── Attempt.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── assignment.css
    │   │       │   │       ├── AttemptV1.tsx
    │   │       │   │       ├── CodeRightSection.tsx
    │   │       │   │       ├── ConfirmExit.tsx
    │   │       │   │       ├── ConfirmSubmit.tsx
    │   │       │   │       ├── LeftSection.tsx
    │   │       │   │       ├── RightSection.tsx
    │   │       │   │       ├── types.ts
    │   │       │   │       └── Proctoring/
    │   │       │   │           ├── AntiCheat.tsx
    │   │       │   │           ├── FullScreenEnforcer.tsx
    │   │       │   │           └── TabSwitchCounter.tsx
    │   │       │   ├── auth/
    │   │       │   │   ├── ForgotPasswordForm.tsx
    │   │       │   │   ├── OtpForm.tsx
    │   │       │   │   └── ResetPasswordForm.tsx
    │   │       │   ├── Batch-info/
    │   │       │   │   ├── BatchInfo.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AssessmentsForm.tsx
    │   │       │   │       ├── BatchSidebar.tsx
    │   │       │   │       ├── BatchStudentForm.tsx
    │   │       │   │       ├── EntityList.tsx
    │   │       │   │       ├── InfoBlock.tsx
    │   │       │   │       ├── StudentsForm.tsx
    │   │       │   │       ├── Tabs.tsx
    │   │       │   │       └── V1BatchInfo.tsx
    │   │       │   ├── Blog/
    │   │       │   │   ├── Blog.tsx
    │   │       │   │   └── v1/
    │   │       │   │       └── BlogV1.tsx
    │   │       │   ├── compiler/
    │   │       │   │   ├── Compiler.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── CodeCompiler.tsx
    │   │       │   │       └── CompilerV1.tsx
    │   │       │   ├── contact/
    │   │       │   │   ├── Contact.tsx
    │   │       │   │   ├── V1/
    │   │       │   │   │   └── ContactV1.tsx
    │   │       │   │   └── V2/
    │   │       │   │       └── ContactV2.tsx
    │   │       │   ├── Contributors/
    │   │       │   │   ├── Contributors.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── ContributorsV1.tsx
    │   │       │   │       └── ProfileCard.tsx
    │   │       │   ├── courses/
    │   │       │   │   ├── AllCourses/
    │   │       │   │   │   ├── AllCourses.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── AllCoursesV1.tsx
    │   │       │   │   ├── AttempAssignment/
    │   │       │   │   │   ├── AttemptAssignment.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── AttemptAssignmentV1.tsx
    │   │       │   │   ├── Course/
    │   │       │   │   │   ├── Course.tsx
    │   │       │   │   │   ├── v1/
    │   │       │   │   │   │   ├── Assignments.tsx
    │   │       │   │   │   │   ├── BreadCrumbs.tsx
    │   │       │   │   │   │   ├── CourseV1.tsx
    │   │       │   │   │   │   ├── LeftSection.tsx
    │   │       │   │   │   │   ├── MarkCompleteButton.tsx
    │   │       │   │   │   │   ├── RightSection.tsx
    │   │       │   │   │   │   ├── SectionCard.tsx
    │   │       │   │   │   │   ├── Study.tsx
    │   │       │   │   │   │   ├── StudyModeToggle.tsx
    │   │       │   │   │   │   └── WhatYoullLearn.tsx
    │   │       │   │   │   └── v2/
    │   │       │   │   │       ├── CourseV2.tsx
    │   │       │   │   │       └── PDFViewer.tsx
    │   │       │   │   └── CourseStudyMode/
    │   │       │   │       ├── CourseStudyMode.tsx
    │   │       │   │       └── v1/
    │   │       │   │           ├── CourseMeta.tsx
    │   │       │   │           ├── CourseStudyModeV1.tsx
    │   │       │   │           ├── NotesPanel.tsx
    │   │       │   │           └── VideoSection.tsx
    │   │       │   ├── CreateStudent/
    │   │       │   │   ├── CreateStudent.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── CreateStudentV1.tsx
    │   │       │   │       └── Input.tsx
    │   │       │   ├── CreateVendor/
    │   │       │   │   ├── CreateVendor.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── CreateVendorV1.tsx
    │   │       │   │       └── Input.tsx
    │   │       │   ├── general/
    │   │       │   │   ├── BatchesForm.tsx
    │   │       │   │   ├── CourseForm.tsx
    │   │       │   │   ├── Filter.tsx
    │   │       │   │   ├── Footer.tsx
    │   │       │   │   ├── Navbar.tsx
    │   │       │   │   ├── SideBar.tsx
    │   │       │   │   ├── StudentForm.tsx
    │   │       │   │   ├── StudentSidebar.tsx
    │   │       │   │   ├── TeacherForm.tsx
    │   │       │   │   ├── useRole.ts
    │   │       │   │   └── (Color Manager)/
    │   │       │   │       ├── Colors.ts
    │   │       │   │       ├── Palette.ts
    │   │       │   │       ├── SemanticColors.ts
    │   │       │   │       ├── SemanticCSSVariables.ts
    │   │       │   │       ├── ThemeController.tsx
    │   │       │   │       ├── ThemeSwitcher.tsx
    │   │       │   │       ├── useColors.tsx
    │   │       │   │       └── useSemanticColors.tsx
    │   │       │   ├── Home/
    │   │       │   │   ├── Home.tsx
    │   │       │   │   ├── V1/
    │   │       │   │   │   ├── V1Home.tsx
    │   │       │   │   │   └── V1HomeNav.tsx
    │   │       │   │   └── V2/
    │   │       │   │       ├── Companies.tsx
    │   │       │   │       ├── CTA.tsx
    │   │       │   │       ├── FAQ.tsx
    │   │       │   │       ├── Hero.tsx
    │   │       │   │       ├── HomeV2.tsx
    │   │       │   │       ├── HowItWorks.tsx
    │   │       │   │       ├── Newsletter.tsx
    │   │       │   │       ├── ScrollReveal.tsx
    │   │       │   │       ├── Testimonials.tsx
    │   │       │   │       ├── useInView.ts
    │   │       │   │       └── WhyBitwise.tsx
    │   │       │   ├── Institution-Dashboard/
    │   │       │   │   ├── InstitutionDashboard.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── EntityDetailModal.tsx
    │   │       │   │       ├── HeroSection.tsx
    │   │       │   │       └── InstitutionDashboardV1.tsx
    │   │       │   ├── Institution-info/
    │   │       │   │   ├── InstitutionInfo.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── EntityList.tsx
    │   │       │   │       ├── InfoBlock.tsx
    │   │       │   │       ├── InstitutionSidebar.tsx
    │   │       │   │       ├── Tabs.tsx
    │   │       │   │       └── V1InstitutionInfo.tsx
    │   │       │   ├── ListedCourses/
    │   │       │   │   ├── ListedCourses.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── CoursesHeader.tsx
    │   │       │   │       └── ListedCoursesV1.tsx
    │   │       │   ├── our-services/
    │   │       │   │   ├── OurServices.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── OurServicesV1.tsx
    │   │       │   │       └── ServiceHeader.tsx
    │   │       │   ├── Problem/
    │   │       │   │   ├── Problem.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── Description.tsx
    │   │       │   │       ├── Editor.tsx
    │   │       │   │       ├── MarkdownComponent.tsx
    │   │       │   │       ├── Solution.tsx
    │   │       │   │       ├── Submission.tsx
    │   │       │   │       ├── TestCases.tsx
    │   │       │   │       ├── TestcaseSection.tsx
    │   │       │   │       └── V1Problem.tsx
    │   │       │   ├── ProblemAdminDashboard/
    │   │       │   │   ├── ProblemAdminDashboard.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AllDsaProblem.tsx
    │   │       │   │       ├── DashboardHero.tsx
    │   │       │   │       ├── ProblemSubmissionForm.tsx
    │   │       │   │       └── V1ProblemAdminDashboard.tsx
    │   │       │   ├── report/
    │   │       │   │   ├── Report.tsx
    │   │       │   │   ├── courseEnrollment/
    │   │       │   │   │   ├── CourseEnrollment.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── CourseEnrollmentV1.tsx
    │   │       │   │   ├── individualAssessmentReport/
    │   │       │   │   │   └── IndividualAssessmentReport.tsx
    │   │       │   │   ├── individualCourseReport/
    │   │       │   │   │   ├── IndividualCourseReport.tsx
    │   │       │   │   │   └── v1/
    │   │       │   │   │       └── IndividualCourseReportV1.tsx
    │   │       │   │   └── v1/
    │   │       │   │       ├── AllAssessments.tsx
    │   │       │   │       ├── AllCourses.tsx
    │   │       │   │       ├── ReportHero.tsx
    │   │       │   │       └── ReportV1.tsx
    │   │       │   ├── student-assessment/
    │   │       │   │   ├── StudentAssessment.tsx
    │   │       │   │   └── v1/
    │   │       │   │       └── StudentAssessmentv1.tsx
    │   │       │   ├── Student-Dashboard/
    │   │       │   │   ├── StudentDashboard.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── EntityDetailModal.tsx
    │   │       │   │       ├── HeroSection.tsx
    │   │       │   │       └── StudentDashboardV1.tsx
    │   │       │   ├── Teacher-Dashboard/
    │   │       │   │   ├── VendorDashboard.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── EntityDetailModal.tsx
    │   │       │   │       ├── HeroSection.tsx
    │   │       │   │       └── TeacherDashboardV1.tsx
    │   │       │   ├── ui/
    │   │       │   │   ├── Card.tsx
    │   │       │   │   ├── MarkDownEditor.tsx
    │   │       │   │   └── tabs.tsx
    │   │       │   ├── Vendor-Dashboard/
    │   │       │   │   ├── VendorDashboard.tsx
    │   │       │   │   └── V1/
    │   │       │   │       ├── EntityDetailModal.tsx
    │   │       │   │       ├── HeroSection.tsx
    │   │       │   │       └── VendorDashboardV1.tsx
    │   │       │   └── Vendor-Info/
    │   │       │       ├── VendorInfo.tsx
    │   │       │       ├── VendorInstitutions.tsx
    │   │       │       └── v1/
    │   │       │           ├── DashboardInfo.tsx
    │   │       │           ├── EntityDetailModel.tsx
    │   │       │           ├── InfoBlock.tsx
    │   │       │           ├── InstitutionForm.tsx
    │   │       │           ├── V1VendorInfo.tsx
    │   │       │           ├── V1VendorInstitutions.tsx
    │   │       │           └── VendorSidebar.tsx
    │   │       ├── hooks/
    │   │       │   └── .gitkeep
    │   │       ├── lib/
    │   │       │   ├── access.ts
    │   │       │   ├── authJwt.ts
    │   │       │   ├── axios.ts
    │   │       │   ├── logout.ts
    │   │       │   ├── useLogs.tsx
    │   │       │   ├── utils.ts
    │   │       │   └── content/
    │   │       │       ├── blog.ts
    │   │       │       ├── courses.ts
    │   │       │       ├── faq.ts
    │   │       │       └── testimonials.ts
    │   │       └── store/
    │   │           ├── adminStore.ts
    │   │           ├── institutionStore.ts
    │   │           ├── studentStore.ts
    │   │           ├── teacherStore.ts
    │   │           └── vendorStore.ts
    │   ├── server/
    │   │   ├── README.md
    │   │   ├── index.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── .dockerignore
    │   │   ├── .env.example
    │   │   ├── controller/
    │   │   │   ├── admin.controller.ts
    │   │   │   ├── assessment-question.controller.ts
    │   │   │   ├── assessment-section.controller.ts
    │   │   │   ├── assessment-submission.controller.ts
    │   │   │   ├── assessment.controller.ts
    │   │   │   ├── auth.controller.ts
    │   │   │   ├── batch.controller.ts
    │   │   │   ├── code-runner.controller.ts
    │   │   │   ├── contact.controller.ts
    │   │   │   ├── course-assignment.controller.ts
    │   │   │   ├── course-content.controller.ts
    │   │   │   ├── course-enrollment.controller.ts
    │   │   │   ├── course-grade.controller.ts
    │   │   │   ├── course-progress.controller.ts
    │   │   │   ├── course.controller.ts
    │   │   │   ├── csv-upload.controller.ts
    │   │   │   ├── dsa-question.controller.ts
    │   │   │   ├── institution.controller.ts
    │   │   │   ├── reports.controller.ts
    │   │   │   ├── student.controller.ts
    │   │   │   ├── super-admin.controller.ts
    │   │   │   ├── teacher.controller.ts
    │   │   │   └── vendor.controller.ts
    │   │   ├── middleware/
    │   │   │   ├── auth.middleware.ts
    │   │   │   └── multer.middleware.ts
    │   │   ├── routes/
    │   │   │   ├── admin.routes.ts
    │   │   │   ├── assessment.routes.ts
    │   │   │   ├── auth.routes.ts
    │   │   │   ├── batch.routes.ts
    │   │   │   ├── bulk-upload.routes.ts
    │   │   │   ├── code-runner.routes.ts
    │   │   │   ├── contact.routes.ts
    │   │   │   ├── course.route.ts
    │   │   │   ├── dsa-question.route.ts
    │   │   │   ├── index.ts
    │   │   │   ├── institution.routes.ts
    │   │   │   ├── report.routes.ts
    │   │   │   ├── student.routes.ts
    │   │   │   ├── teacher.routes.ts
    │   │   │   └── vendor.routes.ts
    │   │   ├── service/
    │   │   │   ├── cloudinary.service.ts
    │   │   │   ├── piston.service.ts
    │   │   │   └── s3.service.ts
    │   │   └── utils/
    │   │       ├── apiResponse.ts
    │   │       ├── interface.ts
    │   │       ├── jwt.ts
    │   │       ├── password.ts
    │   │       ├── piston.ts
    │   │       ├── prisma.ts
    │   │       ├── producer.ts
    │   │       ├── resetToken.ts
    │   │       ├── seed.ts
    │   │       ├── type.ts
    │   │       └── nodemailer/
    │   │           ├── emailTemplate.js
    │   │           ├── emailTemplate.ts
    │   │           ├── GeneratePass.ts
    │   │           └── mailHandler.ts
    │   └── worker-server/
    │       ├── README.md
    │       ├── cron.ts
    │       ├── index.ts
    │       ├── package.json
    │       ├── tsconfig.json
    │       ├── .dockerignore
    │       ├── .env.example
    │       └── utils/
    │           ├── assessment-processing.ts
    │           ├── end-assessment.ts
    │           ├── file-upload.ts
    │           ├── prisma.ts
    │           └── queueClient.ts
    ├── docker/
    │   ├── dockerfile.backend
    │   ├── dockerfile.frontend
    │   └── dockerfile.service-worker
    ├── docs/
    │   └── server/
    │       ├── course.module.md
    │       ├── dsa.module.md
    │       └── services.module.md
    ├── ops/
    │   └── caddyconfig.sh
    ├── packages/
    │   ├── db/
    │   │   ├── index.ts
    │   │   ├── package.json
    │   │   ├── .env.example
    │   │   └── prisma/
    │   │       └── schema.prisma
    │   ├── eslint-config/
    │   │   ├── README.md
    │   │   ├── base.js
    │   │   ├── next.js
    │   │   ├── package.json
    │   │   └── react-internal.js
    │   ├── queue/
    │   │   ├── README.md
    │   │   ├── index.ts
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── type.ts
    │   ├── typescript-config/
    │   │   ├── base.json
    │   │   ├── nextjs.json
    │   │   ├── package.json
    │   │   └── react-library.json
    │   └── ui/
    │       ├── eslint.config.mjs
    │       ├── package.json
    │       ├── tsconfig.json
    │       └── src/
    │           ├── button.tsx
    │           ├── card.tsx
    │           └── code.tsx
    ├── .github/
    │   └── workflows/
    │       └── deployment.yaml
    └── .husky/
        ├── post-merge
        └── pre-push

```
