pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script{
                    if (env.BRANCH_NAME == 'main'){
                        sh 'pwd'
                        sh 'docker compose build'
                        sh 'docker compose up -d'
                    } else if (env.BRANCH_NAME.startsWith('dev/')) {
                       sshagent(['local-server']) {
                            sh 'ssh -o StrictHostKeyChecking=no tom@public.tom-briggs.com "docker ps"'
                       }
                    } else {
                        sh 'echo branch does not match main or dev'
                    }
                }
                
            }
        }
    }
}