export async function GET() {
    
    const data = [
        {
            question: 'question # 1',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },
        {
            question: 'question # 2',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 3',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 4',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 5',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 6',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 7',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        },{
            question: 'question # 8',
            questionType: 'multiple',
            correctAnswer: 1,
            answers: [
                {name: 'answer 1'},
                {name: 'answer 2'},
                {name: 'answer 3'}
            ]
        }
    ]
    return Response.json({ data })
  }