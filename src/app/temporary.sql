CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    roles_name VARCHAR(50) NOT NULL
);

CREATE TABLE LearningTypes (
    type_id SERIAL PRIMARY KEY,
    learning_types_name VARCHAR(50) NOT NULL
);

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    users_name VARCHAR(100) NOT NULL,
    users_last_name VARCHAR(100) NOT NULL,
    users_email VARCHAR(100) NOT NULL UNIQUE,
    users_avatar VARCHAR(255),
    users_learning_type_id INTEGER REFERENCES LearningTypes(type_id) ON DELETE SET NULL,
    users_role_id INTEGER REFERENCES Roles(role_id) ON DELETE SET NULL,
    users_class_id INTEGER REFERENCES Classes(class_id) ON DELETE SET NULL,
    users_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Classes (
    class_id SERIAL PRIMARY KEY,
    classes_name VARCHAR(100) NOT NULL,
    classes_created_by INTEGER REFERENCES Users(user_id) ON DELETE SET NULL,
    classes_start_date DATE,
    classes_end_date DATE,
    classes_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    classes_level VARCHAR(50) NOT NULL
);

CREATE TABLE ClassTeachers (
    class_id INTEGER REFERENCES Classes(class_id),
    class_teachers_mentor_id INTEGER REFERENCES Users(user_id),
    PRIMARY KEY (class_id, class_teachers_mentor_id)
);

CREATE TABLE ClassStudents (
    class_id INTEGER REFERENCES Classes(class_id),
    class_students_student_id INTEGER REFERENCES Users(user_id),
    PRIMARY KEY (class_id, class_students_student_id)
);

CREATE TABLE Goals (
    goal_id SERIAL PRIMARY KEY,
    goals_description TEXT NOT NULL,
    goals_accomplish_by DATE,
    goals_points INTEGER NOT NULL,
    goals_type VARCHAR(50) NOT NULL,
    goals_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    goals_achieved BOOLEAN NOT NULL,
    goals_user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE
);

CREATE TABLE InstantFeedback (
    instant_feedback_id SERIAL PRIMARY KEY,
    instant_feedback_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    instant_feedback_class_id INTEGER REFERENCES Classes(class_id),
    instant_feedback_created_by_id INTEGER REFERENCES Users(user_id)
);

CREATE TABLE VocabularyCards (
    vocab_id SERIAL PRIMARY KEY,
    vocab_image_url VARCHAR(255),
    vocab_word VARCHAR(100) NOT NULL,
    vocab_definition TEXT NOT NULL,
    vocab_context TEXT,
    vocab_example TEXT,
    vocab_topic VARCHAR(100),
    vocab_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    vocab_class_id INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE,
    vocab_instant_feedback_id INTEGER REFERENCES InstantFeedback(instant_feedback_id) ON DELETE SET NULL,
    vocab_created_by_id INTEGER REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE GrammarCards (
    grammar_id SERIAL PRIMARY KEY,
    grammar_error TEXT NOT NULL,
    grammar_fix TEXT NOT NULL,
    grammar_explanation TEXT,
    grammar_topic VARCHAR(100),
    grammar_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    grammar_class_id INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE,
    grammar_instant_feedback_id INTEGER REFERENCES InstantFeedback(instant_feedback_id) ON DELETE SET NULL,
    grammar_created_by_id INTEGER REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE PronunciationCards (
    pronunciation_id SERIAL PRIMARY KEY,
    pronunciation_word VARCHAR(100) NOT NULL,
    pronunciation_audio_url VARCHAR(255),
    pronunciation_tips TEXT,
    pronunciation_topic VARCHAR(100),
    pronunciation_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    pronunciation_class_id INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE,
    pronunciation_instant_feedback_id INTEGER REFERENCES InstantFeedback(instant_feedback_id) ON DELETE SET NULL,
    pronunciation_created_by_id INTEGER REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE Attendance (
    attendance_id SERIAL PRIMARY KEY,
    attendance_user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    attendance_status VARCHAR(50) NOT NULL,
    attendance_session_date TIMESTAMP NOT NULL,
    attendance_class_id INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE
);

CREATE TABLE Quizzes (
    quiz_id SERIAL PRIMARY KEY,
    quizzes_created_by INTEGER REFERENCES Users(user_id) ON DELETE SET NULL,
    quizzes_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    quizzes_type VARCHAR(50) NOT NULL
);

CREATE TABLE AssignedQuizzes (
    assigned_quiz_id SERIAL PRIMARY KEY,
    assigned_quiz_quiz_id INTEGER REFERENCES Quizzes(quiz_id) ON DELETE CASCADE,
    assigned_quiz_created_by INTEGER REFERENCES Users(user_id) ON DELETE SET NULL,
    assigned_quiz_assigned_to INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE,
    assigned_quiz_type VARCHAR(50) NOT NULL,
    assigned_quiz_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    assigned_quiz_due_date DATE
);

CREATE TABLE QuizQuestions (
    question_id SERIAL PRIMARY KEY,
    question_text TEXT NOT NULL,
    question_audio_definition TEXT,
    question_type VARCHAR(50) NOT NULL,
    question_answer TEXT NOT NULL,
    question_quiz_id INTEGER REFERENCES Quizzes(quiz_id) ON DELETE CASCADE
);

CREATE TABLE StudentAnswers (
    student_answers_id SERIAL PRIMARY KEY,
    student_answers_user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    student_answers_quiz_id INTEGER REFERENCES Quizzes(quiz_id) ON DELETE CASCADE,
    student_answers_question_id INTEGER REFERENCES QuizQuestions(question_id) ON DELETE CASCADE,
    student_answers_response TEXT NOT NULL,
    student_answers_responded_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Scores (
    scores_user_id INTEGER REFERENCES Users(user_id) ON DELETE CASCADE,
    scores_class_id INTEGER REFERENCES Classes(class_id) ON DELETE CASCADE,
    scores_goals_achieved INTEGER NOT NULL,
    scores_attendance INTEGER NOT NULL,
    scores_vocab_cards_made INTEGER NOT NULL,
    scores_pronunciation_cards_made INTEGER NOT NULL,
    scores_grammar_cards_made INTEGER NOT NULL,
    scores_vocab_cards_reviewed INTEGER NOT NULL,
    scores_pronunciation_cards_reviewed INTEGER NOT NULL,
    scores_grammar_cards_reviewed INTEGER NOT NULL,
    scores_quizzes_taken INTEGER NOT NULL,
    scores_avg_quizzes_week FLOAT NOT NULL,
    scores_avg_quiz_questions FLOAT NOT NULL,
    PRIMARY KEY (scores_user_id, scores_class_id)
);
