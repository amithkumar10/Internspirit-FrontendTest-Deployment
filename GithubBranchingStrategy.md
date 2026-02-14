
<p align="center">
  <img width="400" height="300" alt="img2-removebg-preview" src="https://github.com/user-attachments/assets/1f54a639-33f8-4b3c-ac6b-862522aa7e30" />
</p>
<br><br>


 # GitHub Branching Strategy

## 🌿 Branches Used
- `main`
- `feature/*`
- `release/*`
- `hotfix/*`

---

## 1️⃣ Main Branch (`main`)
- `main` is the default branch.
- Every new developer pulls the codebase from `main`.
- `main` always contains the latest integrated development code.
- `main` is deployed to the **staging/testing server**.

---

## 2️⃣ Feature Branches (`feature/*`)
- Developers create a new branch from `main` for every feature.
- Naming convention example:
  - `feature/login`
  - `feature/signup`
  - `feature/payment`

### 🔄 Workflow
1. Developer pulls latest code from `main`
2. Creates a `feature/*` branch
3. Implements the feature
4. Pushes changes to GitHub
5. Creates a Pull Request (PR) to merge into `main`
6. After review, feature is merged into `main`

---

## 3️⃣ 🧪 Staging Deployment 
- The `main` branch is connected to the staging environment.
- Once the code is ready to be tested on test environment, `main` branch code is deployed on staging server

---

## 4️⃣ 📦 Release Branches (`release/*`)
- Once staging testing is completed and the product is stable:
  - A new release branch is created with proper naming convention.
- Naming follows **[Semantic Versioning](https://www.geeksforgeeks.org/software-engineering/introduction-semantic-versioning/)** convention:
  - `release/v0.1.0`
  - `release/v0.2.0`
  - `release/v1.0.0`

### 🔄 Workflow
1. Development happens via feature branches → merged into `main`
2. `main` is deployed to staging and tested
3. After approval, create `release/vx.y.z` from main
4. Deploy release branch code to production server

---

## 5️⃣ 🌍 Production Deployment 
- Production deployment always happens from a `release/*` branch.
- This ensures production is isolated from ongoing development in `main`.

---

## 6️⃣ 🆕 New Version Release Flow
When a new version update is needed:

1. Developers create new feature branches again from `main`
2. Merge features back into `main`
3. `main` is deployed and tested on staging
4. After testing is completed:
   - Create a new release branch (`release/new-version`)
5. Deploy the new release branch to production

---

## 7️⃣ 🚑 Hotfix Branch (`hotfix/*`)
- If a bug/error occurs in production:
  - Create a `hotfix/*` branch from release branch

### 🔄 Workflow
1. Create `hotfix/loading-issue` branch from release branch `release/v1.1.0`
2. Fix the production issue
3. Merge hotfix into `main`
4. Deploy to staging for testing
5. Create new release branch `release/v1.1.1` and merge the `hotflix/loading-issue` into it.

### 🏷️ Naming Convention for Hotfix
-  Just like feature branch hotfix branches also need to be named correctly and are short lived
     - `hotfix/login-bug`
     - `hotfix/payment-crash`
---