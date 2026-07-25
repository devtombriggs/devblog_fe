pipeline {
    agent any

    stages {
        stage('Hello World') {
            steps {
                sh 'pwd'
                sh 'docker compose build'
                sh 'docker compose up -d'
            }
        }
    }
}