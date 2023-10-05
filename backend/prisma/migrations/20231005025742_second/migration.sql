-- CreateTable
CREATE TABLE "admin" (
    "name" UUID NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "illness" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "percentege" VARCHAR(255),
    "cost" VARCHAR(255),
    "averageAge" VARCHAR(255),
    "womenPercentage" VARCHAR(255),

    CONSTRAINT "illness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metric" (
    "question" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,
    "illnessId" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "patient" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "birthdate" DATE NOT NULL,
    "peopleWhoLivesWith" INTEGER NOT NULL,
    "perCapitaIncome" INTEGER NOT NULL,
    "schooling" VARCHAR(255) NOT NULL,
    "hemodialysis" BOOLEAN NOT NULL,
    "DPOCHistory" BOOLEAN NOT NULL,
    "respiratoryProblem" BOOLEAN NOT NULL,
    "healthyEating" BOOLEAN NOT NULL,
    "anxiety" VARCHAR(255) NOT NULL,
    "emotionalLackOfControl" VARCHAR(255) NOT NULL,
    "insomnia" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "alcoholFrequence" VARCHAR(255) NOT NULL,
    "smokingFrequence" VARCHAR(255) NOT NULL,
    "workoutFrequence" VARCHAR(255) NOT NULL,
    "historicOfCancer" VARCHAR(255) NOT NULL,
    "historicOfDiabetes" VARCHAR(255) NOT NULL,
    "historicOfObesity" VARCHAR(255) NOT NULL,
    "unimedCard" VARCHAR(255) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "patientId" UUID NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "illness_name_key" ON "illness"("name");

-- CreateIndex
CREATE UNIQUE INDEX "metric_question_key" ON "metric"("question");
