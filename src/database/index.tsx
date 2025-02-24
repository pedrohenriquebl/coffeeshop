interface CoffeeType {
    type: 'Tradicional' | 'Gelado' | 'Com Leite' | 'Especial' | 'Alcóolico';
}

interface CoffeeCard {
    id: number;
    url: string;
    title: string;
    tag: CoffeeType | CoffeeType[];
    description: string;
    price: number;
}

export const CoffeeDatabase: CoffeeCard[] = [
    {   
        id: 1, 
        url: "assets/coffee/express.png",
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        tag: [
            {
                type: "Tradicional"            
            }
        ],
        price: 9.90
    },
    {   
        id: 2, 
        url: "assets/coffee/american.png",
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        tag: [
            {
                type: "Tradicional"            
            }
        ],
        price: 9.90
    },
    {   
        id: 3, 
        url: "assets/coffee/cream_express.png",
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        tag: [
            {
                type: "Tradicional"            
            }
        ],
        price: 9.90
    },

    {   
        id: 4, 
        url: "assets/coffee/iced_coffee.png",
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        tag: [
            {
                type: "Tradicional"            
            },{
                type: "Gelado"
            }
        ],
        price: 9.90
    },
    {
        id: 5, 
        url: "assets/coffee/milk_and_coffee.png",
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        tag: [
            {
                type: "Tradicional"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 6, 
        url: "assets/coffee/latte.png",
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tag: [
            {
                type: "Tradicional"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 7, 
        url: "assets/coffee/capuccino.png",
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        tag: [
            {
                type: "Tradicional"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 8, 
        url: "assets/coffee/macchiato.png",
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        tag: [
            {
                type: "Tradicional"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 9, 
        url: "assets/coffee/mocaccino.png",
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        tag: [
            {
                type: "Tradicional"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 10, 
        url: "assets/coffee/hotchocollate.png",
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        tag: [
            {
                type: "Especial"            
            },
            {
                type: "Com Leite"
            }
        ],
        price: 9.90
    },
    {
        id: 11, 
        url: "assets/coffee/cuban.png",
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        tag: [
            {
                type: "Especial"            
            },
            {
                type: "Alcóolico"
            },
            {
                type: "Gelado"
            }
        ],
        price: 9.90
    },
    {
        id: 12, 
        url: "assets/coffee/hawaian.png",
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        tag: [
            {
                type: "Especial"            
            }
        ],
        price: 9.90
    },
    {
        id: 13, 
        url: "assets/coffee/arabic.png",
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        tag: [
            {
                type: "Especial"            
            }
        ],
        price: 9.90
    },
    {
        id: 14, 
        url: "assets/coffee/irish.png",
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        tag: [
            {
                type: "Especial"            
            },
            {
                type: "Alcóolico"
            }
        ],
        price: 9.90
    }
]