-- CreateTable
CREATE TABLE "admin" (
    "name" UUID NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "service" (
    "id" UUID NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "professional" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "clienteId" UUID NOT NULL,
    "cost" VARCHAR(255) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" UUID NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "sex" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "peopleWhoLivesWith" INTEGER NOT NULL,
    "perCapitaIncome" VARCHAR(255) NOT NULL,
    "schooling" VARCHAR(255) NOT NULL,
    "alcoholFrequence" VARCHAR(255) NOT NULL,
    "smokingFrequence" VARCHAR(255) NOT NULL,
    "workoutFrequence" VARCHAR(255) NOT NULL,
    "historicOfCancer" VARCHAR(255) NOT NULL,
    "historicOfDiabetes" VARCHAR(255) NOT NULL,
    "illnessId" UUID NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "illness" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "percentege" VARCHAR(255) NOT NULL,
    "cost" VARCHAR(255) NOT NULL,
    "averageAge" VARCHAR(255) NOT NULL,
    "womenPercentage" VARCHAR(255) NOT NULL,

    CONSTRAINT "illness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "metric" (
    "question" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,
    "illnessId" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "illness_name_key" ON "illness"("name");

-- CreateIndex
CREATE UNIQUE INDEX "metric_question_key" ON "metric"("question");

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_illnessId_fkey" FOREIGN KEY ("illnessId") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "metric" ADD CONSTRAINT "metric_illnessId_fkey" FOREIGN KEY ("illnessId") REFERENCES "illness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
