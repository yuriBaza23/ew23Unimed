-- CreateTable
CREATE TABLE "admin" (
    "name" TEXT NOT NULL,
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
    "metrics" JSON NOT NULL,
    "atributes" TEXT[],

    CONSTRAINT "illness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metric" (
    "question" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "patient" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" VARCHAR(255) NOT NULL,
    "peopleWhoLivesWith" VARCHAR(255) NOT NULL,
    "perCapitaIncome" VARCHAR(255) NOT NULL,
    "schooling" VARCHAR(255) NOT NULL,
    "hemodialysis" VARCHAR(255) NOT NULL,
    "DPOCHistory" VARCHAR(255) NOT NULL,
    "respiratoryProblem" VARCHAR(255) NOT NULL,
    "healthyEating" VARCHAR(255) NOT NULL,
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

-- CreateTable
CREATE TABLE "diagnostics" (
    "id" UUID NOT NULL,
    "patientId" UUID NOT NULL,
    "addressId" UUID NOT NULL,
    "illnessId" UUID NOT NULL,
    "serviceId" VARCHAR(255) NOT NULL,
    "service" VARCHAR(255) NOT NULL,
    "dateOfService" DATE NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "diagnostics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_name_key" ON "admin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "illness_name_key" ON "illness"("name");

-- CreateIndex
CREATE UNIQUE INDEX "metric_question_key" ON "metric"("question");
