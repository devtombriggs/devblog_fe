pipeline {
    agent any

    stages {
        stage('Hello World') {
            steps {
                sh 'pwd'
                sh 'docker build . -t blog_ui'
                sh 'docker-compose up -d'
            }
        }
    }
}