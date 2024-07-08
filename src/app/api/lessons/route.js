export async function GET() {
    
    const data = {
        courseId: 1,
        courseDescription: 'Curso # 1',
        courseProgress: 0,
        lessons: [{
            lessonId: 1,
            name: 'lesson # 1',
            description: 'lesson 1',
            isComplete: false,
            isActive: true,
        },
        {
            lessonId: 2,
            name: 'lesson # 2',
            description: 'lesson 2',
            isComplete: false,
            isActive: false,
        },
        {
            lessonId: 1,
            name: 'lesson # 3',
            description: 'lesson 3',
            isComplete: false,
            isActive: false,
        },
        {
            lessonId: 1,
            name: 'lesson # 4',
            description: 'lesson 4',
            isComplete: false,
            isActive: false,
        },
        {
            lessonId: 1,
            name: 'lesson # 5',
            description: 'lesson 5',
            isComplete: false,
            isActive: false,
        }]
    }
   
    return Response.json({ data })
  }