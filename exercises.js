var listOfExercises = [
    {
        difficulty: 'easy',
        fn:     "\n  function double(n) {\n    return n  n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(1) → 2",
        hints: [
            'Read between the n\'s',
            'To double, must add',
            'Missing plus operator'
        ],
    },
    {
        difficulty: 'easy',
        fn:     "\n  function double() {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(1) → 2",
        hints: [
            'Where\'s it getting n from?',
            'Those parentheses look empty',
            'Missing parameter, n'
        ],
    },
    {
        difficulty: 'normal',
        fn:     "\n  function double(n) {\n    n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(3) → 6",
        hints: [
            'To come back',
            'It adds, then throws away',
            'Missing return keyword'
        ],
    },
    {
        difficulty: 'normal',
        fn:     "\n   double(n) {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(4) → 8",
        hints: [
            'What is double?',
            'double isn\'t a function',
            'Missing function keyword'
        ],
    },
    {
        difficulty: 'hard',
        fn:     "\n  function double(n) \n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(5) → 10",
        hints: [
            'Where is the start?',
            'Function body missing a matching set',
            'Missing open curly brace'
        ],
    },
    {
        difficulty: 'normal',
        fn:     "\n  function today() {\n    return Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Shiny and...",
            "Return...just Date?",
            "Missing new keyword"
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function today() {\n    return new Date;\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Calling all Dates!",
            "Return...a function?",
            "Missing parentheses after Date"
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function today() {\n    return new date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Case sensitive",
            "Upper! Not lower!",
            "Date is incorrectly lowercase"
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function 2day() {\n    return new Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "You kids and your hip language",
            "Too? To? Two?",
            "Function is misspelled 2day"
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function today() {\n    returns new Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "False pluralization",
            "That's a department, not a keyword!",
            "Incorrect 's' after return"
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function bigger(ab) {\n    return Math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(1,2) → 2",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function bigger(a,b) {\n    return Math.max(ab);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(2,4) → 4",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function bigger(a,b) {\n    return Math.maximum(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(5,3) → 5",
        hints: [
            "Abbreviate it, instead",
            "Mad Max",
            "Method name is max, not maximum"
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function bigger(a,b) {\n    return math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(5,8) → 8",
        hints: [
            "It's kind of a Big Deal",
            "Capitalize it, instead",
            "Must capitalize Math to use it"
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function bigger(a,b) {\n    Math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(2,12) → 12",
        hints: [
            'To come back',
            'It compares, then throws away',
            'Missing return keyword'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function sayHello() {\n    return \"Hello\';\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'The ending is always the same!',
            'Mismatch detected',
            'Incorrect closing quotation after Hello'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function sayHello() {\n    return Hello;\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'Someone famous once said...',
            'What\'s Hello?',
            'Hello is not enclosed in double-quotation marks'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function sayHe11o() {\n    return Hello;\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'H-E- double hockey stick',
            'We\'re not saying the same thing',
            'function name should use l\'s not 1\'s'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function sayHello {\n    return \"Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'How would I call you?!',
            'Every function must have these',
            'Missing parentheses after function name'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  fnuction sayHello() {\n    return \"Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'Fun times...',
            'First things, first',
            'u and n in function are swapped'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list(i))\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'That\'s a function?!',
            'You\'re calling the wrong thing',
            'Incorrectly using parentheses, not brackets, around i'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function loopy(list) {\n    for (i==0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'Under what condition?',
            'Eye on the first i',
            'Use comparison instead of assignment for i'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(i)\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            '1, 2, 3...not 0, 1, 2!',
            'Use i, don\'t log it',
            'Log i\'th index in list, not i itself.'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(loopy[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'That\'s not an array!',
            'Functions don\'t have i\'s',
            'Access [i] of list, not loopy.'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function loopy(list) {\n    for (i=1; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'No i left behind',
            'Watch where you start',
            'Initial value of i should be 0, not 1'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function sum(a,b,c) {\n    return a + b  c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(1,1,1) → 3",
        hints: [
            'Fill the gap',
            'Stopped short of c',
            'Missing + between b and c'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function sum(a,b,c) {\n    return a + b + C;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(2,2,2) → 6",
        hints: [
            'Can you C it?',
            'Looked for C. Came up empty.',
            'Incorrectly capitalized c'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function sum(a,b,b) {\n    return a + b + c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(1,2,3) → 6",
        hints: [
            'Comes after b',
            'b extra careful',
            'Duplicate b in parameter list'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function sum(a,b,c) {\n    retrun a + b + c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(3,1,1) → 5",
        hints: [
            'rut-ro!',
            'Stopped short of returning',
            'return is misspelled'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function sum(a,b,c) {\n    return a + b + c;\n  ",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(3,2,1) → 6",
        hints: [
            'It never ends!',
            'What starts, must end',
            'Missing closing function curly brace'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function each(list) {\n    return list.forEach(i > list[i]);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => list[i]);\n  }",
        test:   "each(3,2,1) → 3 2 1",
        hints: [
            'Where\'s the arrow?',
            'Greater than?',
            'Arrow function is missing equal sign'
        ]
    },
    {
        difficulty: 'easy',
        fn:     "\n  function each(list) {\n    return list.for Each(i => list[i]);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => list[i]);\n  }",
        test:   "each(1,2,3) → 1 2 3",
        hints: [
            'The final frontier',
            'For...Each?',
            'Incorrect space before Each'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function each(list) {\n    return list.foreach(i => list[i]);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => list[i]);\n  }",
        test:   "each(2,4,6) → 2 4 6",
        hints: [
            'Camel case',
            'Every second word',
            'e in each must be capital'
        ]
    },
    {
        difficulty: 'normal',
        fn:     "\n  function each(List) {\n    return list.forEach(i => list[i]);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => list[i]);\n  }",
        test:   "each(1,2,3) → 1 2 3",
        hints: [
            'Check the first case',
            'All lower',
            'Parameter list should be lowercase'
        ]
    },
    {
        difficulty: 'hard',
        fn:     "\n  function each(list) {\n    return list.each(i => list[i]);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => list[i]);\n  }",
        test:   "each(4,4,4) → 4 4 4",
        hints: [
            'Method, man',
            'After the dot',
            'Method name is forEach, not each'
        ]
    },
]