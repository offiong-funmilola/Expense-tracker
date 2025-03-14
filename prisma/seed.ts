import { Category, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const funmilola = await prisma.user.upsert({
        where: { email: 'funmi@test@gmail.com' },
        update: {},
        create: {
            email: 'funmi@test@gmail.com',
            name: 'Funmilola',
            budgets: {
                create: [
                    {
                    description: 'Budget for the month of April',
                    month: 'March',
                    year: '2025',
                    userId: 0,
                    updatedAt: new Date(),
                    incomes: {
                        create: [
                        {
                        source: 'salary',
                        amount: 2500,
                        description: 'monthly salary'
                        },
                        {
                        source: 'Gift',
                        amount: 100,
                        description: 'Birthday gift from a friend',
                        },
                        {
                            source: 'Bonus',
                            amount: 150,
                            description: 'Bonus for vacation',
                        },
                        {
                            source: 'returns',
                            amount: 100,
                            description: 'Returns from investment',
                        }
                    ]}, 
                    expenses: {
                        create: [
                        {
                            title: "Rice",
                            amount: 20,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                        },
                        {
                           
                            title: "Tioletries",
                            amount: 12,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                            
                        },
                       
                        {
                           
                            title: "Vegetable oil",
                            amount: 8,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                            
                        }, 
                        {
                           
                            title: "Chicken",
                            amount: 10,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                           
                        },
                        {
                           
                            title: "Eggs",
                            amount: 9,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                            
                        },
                        {
                            
                            title: "Kinder milk",
                            amount: 200,
                            category: Category.GROCERIES,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                           
                        },
                        {
                            
                            title: "fess",
                            amount: 170,
                            category: Category.KIDS,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                            
                        },
                        {
                         
                            title: "House rent",
                            amount: 1200,
                            category: Category.BILLS,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                           
                        },
                        {
                            
                            title: "Electricity",
                            amount: 70,
                            category: Category.BILLS,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                            
                        },
                        {
                          
                            title: "Internet",
                            amount: 20,
                            category: Category.BILLS,
                            createdAt: new Date(),
                             description: '',
                            updatedAt: new Date()
                            
                        },
                        {
                         
                            title: "transport",
                            amount: 49,
                            category: Category.BILLS,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                            
                        },
                        {
                           
                            title: "savings",
                            amount: 500,
                            category: Category.SAVINGS,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                           
                        },
                        {
                            
                            title: "Miscellaneous",
                            amount: 200,
                            category: Category.BILLS,
                            createdAt: new Date(),
                            description: '',
                            updatedAt: new Date()
                          
                        },
                    ]}
                  },
                ]
            },
        },  
    })
    console.log(funmilola)
}
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })