# GitHub Actions – Practice Repository

This repository is created for **learning and practicing GitHub Actions** based on the Udemy course: ***“GitHub Actions – The Complete Guide”***

The projects in this repository are **section-wise practice projects** taken directly from the course.

## 📌 Important Note (How This Repo Is Structured)
The course is organized **section by section**, and each section contains its **own independent project**.

Because of this structure:
- The code in this repository is **not meant to run GitHub Actions directly as-is**.
- GitHub Actions workflows work correctly **only when the actual project code exists at the root of a repository**, not nested inside section folders.

## 🧩 How to Use This Repository Correctly
If you want to explore or run the GitHub Actions workflows, follow these steps:

### Step 1: Clone or Download the Repository
```
git clone https://github.com/Anuroop-09/Github_Actions_Course_Practice_Repo.git
```

### Step 2: Choose a Section
- Each folder represents a **course section**
- Inside each section, you will find a **complete project**

### Step 3: Prepare the Project Locally
1. Create a **new empty folder** on your local machine
2. Copy **only the project files** from one section
3. Paste them into the **root of the new folder**
4. Remove any extra section-level nesting

### Step 4: Push to Your Own Repository
```
git init
git add .
git commit -m "Add section project"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 5: Run GitHub Actions
- Go to the **Actions** tab in your GitHub repository
- GitHub Actions will now trigger and work correctly

## 🎯 Purpose of This Repository
- Practice GitHub Actions concepts
- Experiment with workflows safely
- Learn CI/CD step by step
- Track progress section by section
This repository is **for learning purposes** only and is not intended to be a production-ready project.

## 📚 Course Credit
> [!NOTE]
All practice projects are based on the Udemy course: **GitHub Actions – The Complete Guide**
