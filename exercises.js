var listOfExercises = [
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function double(n) {\n    return n  n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(1) → 2",
        hints: [
            'Read between the n\'s',
            'To double, must add',
            'Missing plus operator'
        ],
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function double() {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(1) → 2",
        hints: [
            'Where\'s it getting n from?',
            'Those parentheses look empty',
            'Missing parameter, n'
        ],
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function double(n) {\n    n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(3) → 6",
        hints: [
            'To come back',
            'It adds, then throws away',
            'Missing return keyword'
        ],
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  define double(n) {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(4) → 8",
        hints: [
            'What is double?',
            'double isn\'t a function',
            'Replace define with function keyword'
        ],
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function double(n) \n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test:   "double(5) → 10",
        hints: [
            'Where is the start?',
            'Function body missing a matching set',
            'Missing open curly brace'
        ],
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function today() {\n    return Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Shiny and...",
            "Return...just Date?",
            "Missing new keyword"
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function today() {\n    return new Date;\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Calling all Dates!",
            "Return...a function?",
            "Missing parentheses after Date"
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function today() {\n    return new date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "Case sensitive",
            "Upper! Not lower!",
            "Date is incorrectly lowercase"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function 2day() {\n    return new Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "You kids and your hip language",
            "Too? To? Two?",
            "Function is misspelled 2day"
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function today() {\n    returns new Date();\n  }",
        answer: "\n  function today() {\n    return new Date();\n  }",
        test:   "today() → Date object",
        hints: [
            "False pluralization",
            "That's a department, not a keyword!",
            "Incorrect 's' after return"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function bigger(ab) {\n    return Math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(1,2) → 2",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function bigger(a,b) {\n    return Math.max(ab);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(2,4) → 4",
        hints: [
            "Practice your A, B, C's",
            "It separates two things",
            "Missing comma to denote two parameters"
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function bigger(a,b) {\n    return Math.maximum(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(5,3) → 5",
        hints: [
            "Abbreviate it, instead",
            "Mad Max",
            "Method name is max, not maximum"
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function bigger(a,b) {\n    return math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(5,8) → 8",
        hints: [
            "It's kind of a Big Deal",
            "Capitalize it, instead",
            "Must capitalize Math to use it"
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function bigger(a,b) {\n    Math.max(a,b);\n  }",
        answer: "\n  function bigger(a,b) {\n    return Math.max(a,b);\n  }",
        test:   "bigger(2,12) → 12",
        hints: [
            'To come back',
            'It compares, then throws away',
            'Missing return keyword'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function sayHello() {\n    return \"Hello\';\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'The ending is always the same!',
            'Mismatch detected',
            'Incorrect closing quotation after Hello'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function sayHello() {\n    return Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'Someone famous once said...',
            'What\'s Hello?',
            'Missing double-quotation mark before Hello'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function sayHe11o() {\n    return \"Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'H-E- double hockey stick',
            'We\'re not saying the same thing',
            'function name should use l\'s not 1\'s'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function sayHello {\n    return \"Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'How would I call you?!',
            'Every function must have these',
            'Missing parentheses after function name'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  fnuction sayHello() {\n    return \"Hello\";\n  }",
        answer: "\n  function sayHello() {\n    return \"Hello\";\n  }",
        test:   "sayHello() → \"Hello\"",
        hints: [
            'Fun times...',
            'First things, first',
            'u and n in function are swapped'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i))\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'Mismatch detected',
            'Start from the end and work backwards',
            'Incorrectly using parentheses, not brackets, to right of i'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function loopy(list) {\n    for (i==0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'Under what condition?',
            'Eye on the first i',
            'Use comparison instead of assignment for i'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log([i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            '1, 2, 3...not [0][1][2]!',
            'i is in a cage, all alone',
            'Missing list array before [i]'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(loopy[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'That\'s not an array!',
            'Functions don\'t have i\'s',
            'Access [i] of list, not loopy.'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function loopy(list) {\n    for (i=1; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        answer: "\n  function loopy(list) {\n    for (i=0; i<list.length; i++) {\n        console.log(list[i])\n    }\n  }",
        test:   "loopy([1,2,3]) → 1 2 3",
        hints: [
            'No i left behind',
            'Watch where you start',
            'Initial value of i should be 0, not 1'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function sum(a,b,c) {\n    return a + b  c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(1,1,1) → 3",
        hints: [
            'Fill the gap',
            'Stopped short of c',
            'Missing + between b and c'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function sum(a,b,c) {\n    return a + b + C;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(2,2,2) → 6",
        hints: [
            'Can you C it?',
            'Looked for C. Came up empty.',
            'Incorrectly capitalized c'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function sum(a,b,b) {\n    return a + b + c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(1,2,3) → 6",
        hints: [
            'Comes after b',
            'b extra careful',
            'Duplicate b in parameter list'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function sum(a,b,c) {\n    retrun a + b + c;\n  }",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(3,1,1) → 5",
        hints: [
            'rut-ro!',
            'Stopped short of returning',
            'return is misspelled'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function sum(a,b,c) {\n    return a + b + c;\n  ",
        answer: "\n  function sum(a,b,c) {\n    return a + b + c;\n  }",
        test:   "sum(3,2,1) → 6",
        hints: [
            'It never ends!',
            'What starts, must end',
            'Missing closing function curly brace'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function each(list) {\n    return list.forEach(i > i);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => i);\n  }",
        test:   "each(3,2,1) → 3 2 1",
        hints: [
            'Where\'s the arrow?',
            'Greater than?',
            'Arrow function is missing equal sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function each(list) {\n    return list.fourEach(i => i);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => i);\n  }",
        test:   "each(1,2,3) → 1 2 3",
        hints: [
            'Oh, you',
            '4...Each?',
            'Delete u in four'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function each(list) {\n    return list.foreach(i => i);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => i);\n  }",
        test:   "each(2,4,6) → 2 4 6",
        hints: [
            'Camel case',
            'Every second word',
            'e in each must be capital'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function each(1ist) {\n    return list.forEach(i => i);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => i);\n  }",
        test:   "each(1,2,3) → 1 2 3",
        hints: [
            'Sneaky one',
            'Check parameter list',
            'Parameter list should be list, not 1ist'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function each(list) {\n    return list.Each(i => i);\n  }",
        answer: "\n  function each(list) {\n    return list.forEach(i => i);\n  }",
        test:   "each(4,4,4) → 4 4 4",
        hints: [
            'Method, man',
            'After the dot',
            'Method name is forEach, not each'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function equals(num) {\n    return num === String(num);\n  }",
        answer: "\n  function equals(num) {\n    return num == String(num);\n  }",
        test:   "equals(3) → true",
        hints: [
            'One too many',
            'Make triplicates duplicates',
            'Use double-equals instead of triple-equals sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function equals(num) {\n    return num == String(num);\n  }",
        answer: "\n  function equals(num) {\n    return num === String(num);\n  }",
        test:   "equals(4) → false",
        hints: [
            'One too few',
            'Make duplicates triplicates',
            'Use triple-equals instead of double-equals sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function equals(num) {\n    return num == 'num;\n  }",
        answer: "\n  function equals(num) {\n    return num == num;\n  }",
        test:   "equals(5) → true",
        hints: [
            'Both num should be naked',
            'Kill the stray apostrophe!',
            'Remove the single-quote before the second num'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function equals(num) {\n    return num === Sting(num);\n  }",
        answer: "\n  function equals(num) {\n    return num === String(num);\n  }",
        test:   "equals(6) → true",
        hints: [
            'Call The Police',
            'Grrrrrr',
            'Missing r in String'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function equals(num) {\n    return num = String(num);\n  }",
        answer: "\n  function equals(num) {\n    return num == String(num);\n  }",
        test:   "equals(7) → true",
        hints: [
            'Wrong assignment',
            'Is equal to?',
            'Use double-equals instead of single-equal sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function dataType(data) {\n    return typeof dada;\n  }",
        answer: "\n  function dataType(data) {\n    return typeof data;\n  }",
        test:   "dataType({}) → 'object'",
        hints: [
            'Art history',
            'Father, forgive me',
            'Not dada, silly...data!'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function dataType(data) {\n    return typeof data\';\n  }",
        answer: "\n  function dataType(data) {\n    return typeof data;\n  }",
        test:   "dataType({}) → 'object'",
        hints: [
            'Stringing you along',
            'Stop returning strings!',
            'Remove single-quote after data'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function dataType(data) {\n    return typeof data;\n  }",
        answer: "\n  function dataType(data) {\n    return typeof +data;\n  }",
        test:   "dataType('5') → 'number'",
        hints: [
            'One symbol to rule them all',
            'Who\'s your plus-one?',
            'Add a plus sign just left of data'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function dataType(data) {\n    return typeof data();\n  }",
        answer: "\n  function dataType(data) {\n    return typeof new data();\n  }",
        test:   "dataType(Date) → 'object'",
        hints: [
            'Something borrowed, blue, and...',
            'What\'s new?',
            'Missing keyword, new, before data()'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function dataType(data) {\n    return typ of data;\n  }",
        answer: "\n  function dataType(data) {\n    return typeof data;\n  }",
        test:   "dataType({}) → 'object'",
        hints: [
            'Mind the gap',
            'all to get her now',
            'Insert e between typ and of'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function formalName(f,l) {\n    return `${f}, ${f}`;\n  }",
        answer: "\n  function formalName(f,l) {\n    return `${l}, ${f}`;\n  }",
        test:   "formalName('Kanye','West') → 'West, Kanye'",
        hints: [
            'Use all the pieces',
            'Don\'t double the f\'s',
            'First interpolated value should be l, not f'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function formalName(f,l) {\n    return `${l}, $(f}`;\n  }",
        answer: "\n  function formalName(f,l) {\n    return `${l}, ${f}`;\n  }",
        test:   "formalName('George','Bush') → 'Bush, George'",
        hints: [
            'The wall of f',
            'Mismatch detected',
            'Replace parenthesis before f with a curly bracket'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function formalName(f,l) {\n    return `${l} ${f}`;\n  }",
        answer: "\n  function formalName(f,l) {\n    return `${l}, ${f}`;\n  }",
        test:   "formalName('Bob','Dole') → 'Dole, Bob'",
        hints: [
            'Poor grammar',
            'It separates two things',
            'Missing comma between l and f'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function formalName(f,l) {\n    return '${l}, ${f}`;\n  }",
        answer: "\n  function formalName(f,l) {\n    return `${l}, ${f}`;\n  }",
        test:   "formalName('Jack','Ryan') → 'Ryan, Jack'",
        hints: [
            'Wrong tick',
            'Must use correct quote mark',
            'Use two back ticks ` instead of mixture'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function formalName(f,l) {\n    return `{l}, ${f}`;\n  }",
        answer: "\n  function formalName(f,l) {\n    return `${l}, ${f}`;\n  }",
        test:   "formalName('Robert','Mion') → 'Mion, Robert'",
        hints: [
            'Money money money!',
            'One is not like the other',
            'Add a $ to the first interpolation'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function ternary(bool) {\n    return bowl ? 'this' : 'that';\n  }",
        answer: "\n  function ternary(bool) {\n    return bool ? 'this' : 'that';\n  }",
        test:   "ternary(false) → 'that'",
        hints: [
            'Don\'t strike out',
            'Spare me another pun',
            'Not bowl, bool'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function ternary(bool) {\n    return bool ? 'this' : 'that';\n  }",
        answer: "\n  function ternary(bool) {\n    return bool ? this : 'that';\n  }",
        test:   "ternary(true) → Window",
        hints: [
            'Magic keyword',
            'this part shoudn\'t be a string',
            'Remove single-quotes around this'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function ternary(bool) {\n    return bool ? 'this : 'that';\n  }",
        answer: "\n  function ternary(bool) {\n    return bool ? 'this' : 'that';\n  }",
        test:   "ternary(true) → 'this'",
        hints: [
            'this is the hint',
            'this is the next hint',
            'Add single-quote after this'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function ternary(bool) {\n    return bool ? 'this' ; 'that';\n  }",
        answer: "\n  function ternary(bool) {\n    return bool ? 'this' : 'that';\n  }",
        test:   "ternary(false) → 'that'",
        hints: [
            'Look: hint.',
            'Dot over dot, not dot over comma',
            'Wrong colon between this and that'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function ternary(bool) {\n    return bool : 'this' : 'that';\n  }",
        answer: "\n  function ternary(bool) {\n    return bool ? 'this' : 'that';\n  }",
        test:   "ternary(true) → 'this'",
        hints: [
            'Question...everything',
            'First part is a question',
            'First colon should be a question mark'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function makeArrayFrom(a,b,c) {\n    return [a,b,c};\n  }",
        answer: "\n  function makeArrayFrom(a,b,c) {\n    return [a,b,c];\n  }",
        test:   "makeArrayFrom(1,2,3) → [1,2,3]",
        hints: [
            'Not now, curly',
            'Do you c it yet?',
            'Change curly brace after c to square bracket'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function makeArrayFrom(a,b,c) {\n    return (a,b,c);\n  }",
        answer: "\n  function makeArrayFrom(a,b,c) {\n    return Array(a,b,c);\n  }",
        test:   "makeArrayFrom(3,2,1) → [3,2,1]",
        hints: [
            'Use a constructor function',
            'Want array, getting group',
            'Insert the keyword, Array, before (a,b,c)'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newArrayFrom(a,b,c) {\n    return [a,b,c];\n  }",
        answer: "\n  function makeArrayFrom(a,b,c) {\n    return [a,b,c];\n  }",
        test:   "makeArrayFrom(2,2,2) → [2,2,2]",
        hints: [
            'Happens all the time',
            'Naming things is hard',
            'Function name is incorrect'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function makeArrayFrom(a,b,c) {\n    return [a.b,c];\n  }",
        answer: "\n  function makeArrayFrom(a,b,c) {\n    return [a,b,c];\n  }",
        test:   "makeArrayFrom(1,3,5) → [1,3,5]",
        hints: [
            'Grammatical error',
            'Stopping at a',
            'Change period after a to comma'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function makeArrayFrom(a,b,c) {\n    return; [a,b,c];\n  }",
        answer: "\n  function makeArrayFrom(a,b,c) {\n    return [a,b,c];\n  }",
        test:   "makeArrayFrom(2,4,6) → [2,4,6]",
        hints: [
            'Cliffhanger',
            'Two semi-colons?',
            'Delete semi-colon after return'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function greet(name) {\n    return 'Hi, ${name}!`;\n  }",
        answer: "\n  function greet(name) {\n    return `Hi, ${name}!`;\n  }",
        test:   "greet('John') → 'Hi, John!'",
        hints: [
            'Mismatch detected',
            'Don\'t quote me on that',
            'Change first quote to a backtick'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function greet(name) {\n    return `Hi, $(name}!`;\n  }",
        answer: "\n  function greet(name) {\n    return `Hi, ${name}!`;\n  }",
        test:   "greet('Charles') → 'Hi, Charles!'",
        hints: [
            'Mismatch',
            'One of them needs the spike',
            'Change parenthesis before name to curly brace'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function great(name) {\n    return `Hi, ${name}!`;\n  }",
        answer: "\n  function greet(name) {\n    return `Hi, ${name}!`;\n  }",
        test:   "greet('Jack') → 'Hi, Jack!'",
        hints: [
            'Good. Swell. Fine!',
            'One letter off',
            'Incorrect function name'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function greet(name) {\n    return `Hi, ${name}`;\n  }",
        answer: "\n  function greet(name) {\n    return `Hi, ${name}!`;\n  }",
        test:   "greet('Robert') → 'Hi, Robert!'",
        hints: [
            'Not excited enough',
            'I can\'t hear you!',
            'Missing exclamation mark'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function greet() {\n    return `Hi, ${name}!`;\n  }",
        answer: "\n  function greet(name) {\n    return `Hi, ${name}!`;\n  }",
        test:   "greet('Kate') → 'Hi, Kate!'",
        hints: [
            'Where\'s name coming from?',
            'Functions need inputs',
            'Missing parameter, name'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function noteToSelf() {\n    / Some comment\n  }",
        answer: "\n  function noteToSelf() {\n    // Some comment\n  }",
        test:   "noteToSelf() → undefined",
        hints: [
            'Divide by?',
            'This is no time for math',
            'Comments start with two slashes, not one'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function noteToSelf() {\n    \\\\ Some comment\n  }",
        answer: "\n  function noteToSelf() {\n    // Some comment\n  }",
        test:   "noteToSelf() → undefined",
        hints: [
            'Wrong way',
            'Up and to the right',
            'Comments start with two forward slashes, not back slashes'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function noteToSelf() {\n     Some comment\n  }",
        answer: "\n  function noteToSelf() {\n    // Some comment\n  }",
        test:   "noteToSelf() → undefined",
        hints: [
            'Forgetting something?',
            'Error: no idea what Some is',
            'Comments start with two forward slashes'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function notetoSelf() {\n    // Some comment\n  }",
        answer: "\n  function noteToSelf() {\n    // Some comment\n  }",
        test:   "noteToSelf() → undefined",
        hints: [
            'Middle child',
            'Camel case',
            'Function name needs capital T'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function noteToSelf() {\n    */ Some comment\n  }",
        answer: "\n  function noteToSelf() {\n    // Some comment\n  }",
        test:   "noteToSelf() → undefined",
        hints: [
            'Wish upon a star',
            'Single-line comment, not multi-line',
            'Change asterisk to forward slash'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function parrot(number) {\n    return () > number;\n  }",
        answer: "\n  function parrot(number) {\n    return () => number;\n  }",
        test:   "parrot(1)() → 1",
        hints: [
            'Greater than?',
            'That\'s not quite an arrow',
            'Missing equals sign before greater-than sign'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function parrot(number) {\n    return {} => number;\n  }",
        answer: "\n  function parrot(number) {\n    return () => number;\n  }",
        test:   "parrot(2)() → 2",
        hints: [
            'Wrong container',
            'Looks like you\'re returning an object?',
            'Replace curly braces with parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function parrot(number) {\n    return () <= number;\n  }",
        answer: "\n  function parrot(number) {\n    return () => number;\n  }",
        test:   "parrot(3)() → 3",
        hints: [
            'Wrong direction',
            'Left-to-right',
            'Arrow function points the wrong way'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function parrot(number) {\n    return (number) => number;\n  }",
        answer: "\n  function parrot(number) {\n    return () => number;\n  }",
        test:   "parrot(4)() → 4",
        hints: [
            'Closure, baby!',
            'It already has number',
            'Remove number from second parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function parrot(number) {\n    return  => number;\n  }",
        answer: "\n  function parrot(number) {\n    return () => number;\n  }",
        test:   "parrot(5)() → 5",
        hints: [
            'Left of the arrow',
            'Key ingredient in an arrow function',
            'Add a pair of parentheses after return'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function IdPlease(id) {\n    return document.getElementByID(id);\n  }",
        answer: "\n  function IdPlease(id) {\n    return document.getElementById(id);\n  }",
        test:   "IdPlease('neo') → HTMLElement",
        hints: [
            'Big D little d',
            'First letter capital, second lowercase',
            'd in Id should be lowercase'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function IdPlease(id) {\n    return document.getElementsById(id);\n  }",
        answer: "\n  function IdPlease(id) {\n    return document.getElementById(id);\n  }",
        test:   "IdPlease('cher') → HTMLElement",
        hints: [
            'More than we were expecting',
            'We only want one',
            'Element should be singular'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function IdPlease(id) {\n    return document.getElementById('id);\n  }",
        answer: "\n  function IdPlease(id) {\n    return document.getElementById(id);\n  }",
        test:   "IdPlease('prince') → HTMLElement",
        hints: [
            'Stringing you along',
            'Literally...id',
            'Remove single quote before id'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function IdPlease(id) {\n    return document.getElementFromId(id);\n  }",
        answer: "\n  function IdPlease(id) {\n    return document.getElementById(id);\n  }",
        test:   "IdPlease('bono') → HTMLElement",
        hints: [
            'Opposite of Hello',
            'Four words. Third word. Two letters.',
            'Change FromId to ById'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function IdPlease(id) {\n    return window.getElementById(id);\n  }",
        answer: "\n  function IdPlease(id) {\n    return document.getElementById(id);\n  }",
        test:   "IdPlease('sting') → HTMLElement",
        hints: [
            'Look deeper into the window',
            'Synonymous with page',
            'Change window to document'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newTail(list,item) {\n    return list.pass(item);\n  }",
        answer: "\n  function newTail(list,item) {\n    return list.push(item);\n  }",
        test:   "newTail([1,2],3) → [1,2,3]",
        hints: [
            'Bad pass',
            'Wrong method name',
            'Change pass to push'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function newTail(list,item) {\n    rerun list.push(item);\n  }",
        answer: "\n  function newTail(list,item) {\n    return list.push(item);\n  }",
        test:   "newTail([2,4],6) → [2,4,6]",
        hints: [
            '90\'s problems',
            'Send it back',
            'Change rerun to return'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newTail(list,item) {\n    return list.tail(item);\n  }",
        answer: "\n  function newTail(list,item) {\n    return list.push(item);\n  }",
        test:   "newTail([3,4],5) → [3,4,5]",
        hints: [
            'Use your head',
            'Wrong method name',
            'Change tail to push'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newTail(list,item) {\n    return list.push(item]);\n  }",
        answer: "\n  function newTail(list,item) {\n    return list.push(item);\n  }",
        test:   "newTail([3,5],7) → [3,5,7]",
        hints: [
            'Hard right wall',
            'Start at the end',
            'Remove square bracket after item'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newTai(list,item) {\n    return list.push(item);\n  }",
        answer: "\n  function newTail(list,item) {\n    return list.push(item);\n  }",
        test:   "newTail([3,2],1) → [3,2,1]",
        hints: [
            'Use your head',
            'Naming is important',
            'Add an l to Tail'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function chopTail(list) {\n    return list.poop();\n  }",
        answer: "\n  function chopTail(list) {\n    return list.pop();\n  }",
        test:   "chopTail([1,2,3]) → 3",
        hints: [
            'Toilet humor',
            'Potty mouth',
            'Change poop to pop'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function chopTail(list) {\n    return list.pop;\n  }",
        answer: "\n  function chopTail(list) {\n    return list.pop();\n  }",
        test:   "chopTail([3,2,1]) → 1",
        hints: [
            'Don\'t return the function',
            'Work your way backwards',
            'Add parentheses after pop'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function chopTail(list) {\n    return list,pop();\n  }",
        answer: "\n  function chopTail(list) {\n    return list.pop();\n  }",
        test:   "chopTail([2,4,6]) → 6",
        hints: [
            'list and pop?',
            'Dot...dot...dot',
            'Change comma after list to period'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function chopTail() {\n    return list.pop();\n  }",
        answer: "\n  function chopTail(list) {\n    return list.pop();\n  }",
        test:   "chopTail([6,6,6]) → 6",
        hints: [
            'Beware the void',
            'Nothing in...but something out?',
            'Missing parameter, list'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function chopTail(list) {\n    return list.pop(1);\n  }",
        answer: "\n  function chopTail(list) {\n    return list.pop();\n  }",
        test:   "chopTail([9,1,1]) → 1",
        hints: [
            'Does it need the argument?',
            'Read between the curved lines',
            'Remove 1 from parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function chopHead(list) {\n    return list.shift(1);\n  }",
        answer: "\n  function chopHead(list) {\n    return list.shift();\n  }",
        test:   "chopHead([1,2,3]) → 1",
        hints: [
            'Does it need the argument?',
            'Read between the curved lines',
            'Remove 1 from parentheses'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function chopHead(list) {\n    return list.shit();\n  }",
        answer: "\n  function chopHead(list) {\n    return list.shift();\n  }",
        test:   "chopHead([2,2,2]) → 2",
        hints: [
            'Toilet humor',
            'Potty mouth',
            'Change shit to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function chopHead(list) {\n    return list.pop();\n  }",
        answer: "\n  function chopHead(list) {\n    return list.shift();\n  }",
        test:   "chopHead([2,3,4]) → 2",
        hints: [
            'Other end',
            'Wrong method',
            'Change pop to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function chopHead(list) {\n    return list.unshift();\n  }",
        answer: "\n  function chopHead(list) {\n    return list.shift();\n  }",
        test:   "chopHead([3,2,1]) → 3",
        hints: [
            'Other end',
            'Wrong method',
            'Change unshift to shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function chopHead(list) {\n    return list.shift;\n  }",
        answer: "\n  function chopHead(list) {\n    return list.shift();\n  }",
        test:   "chopHead([9,1,1]) → 9",
        hints: [
            'Why won\'t you call?',
            'Return the action, not the function',
            'Missing parentheses after shift'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function newHead(list,item) {\n    return list.unshift();\n  }",
        answer: "\n  function newHead(list,item) {\n    return list.unshift(item);\n  }",
        test:   "newHead([1,2],3) → 3",
        hints: [
            'Fill the void',
            'Someone stole an item',
            'Missing argument, item, inside method call'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function newHead(list,item) {\n    return list.unshift(list);\n  }",
        answer: "\n  function newHead(list,item) {\n    return list.unshift(item);\n  }",
        test:   "newHead([3,2],1) → 1",
        hints: [
            'Add list to list?',
            'Read between the curly lines',
            'Pass item to unshift, not list'
        ]
    },
    {
        language: 'js',
        difficulty: 'normal',
        code:   "\n  function newHead(list,item) {\n    return list.shift(item);\n  }",
        answer: "\n  function newHead(list,item) {\n    return list.unshift(item);\n  }",
        test:   "newHead([7,3],7) → 7",
        hints: [
            'Shift, left',
            'un-acceptable',
            'Change method name to unshift'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function newHead(list,item) {\n    return list.push(item);\n  }",
        answer: "\n  function newHead(list,item) {\n    return list.unshift(item);\n  }",
        test:   "newHead([4,1],4) → 4",
        hints: [
            'Wrong end',
            'Method names have \'sh\' in common',
            'Change method name to unshift'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function newHead(list,item) {\n    return lift.unshift(item);\n  }",
        answer: "\n  function newHead(list,item) {\n    return list.unshift(item);\n  }",
        test:   "newHead([4,1],4) → 4",
        hints: [
            'Minor spelling error',
            'For f\'s sake',
            'Change lift to list'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function manMade(sex) {\n    return {\n      gender= sex\n    }\n  }",
        answer: "\n  function manMade(sex) {\n    return {\n      gender: sex\n    }\n  }",
        test:   "manMade('male') → Object",
        hints: [
            'Wrong assignment',
            'No place for equality',
            'Change equal sign to colon'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function coercion(bool) {\n    return bool;\n  }",
        answer: "\n  function coercion(bool) {\n    return +bool;\n  }",
        test:   "coercion(true) → 1",
        hints: [
            'Unary, baby!',
            'Need number, not boolean',
            'Insert plus sign before bool'
        ]
    },
    {
        language: 'js',
        difficulty: 'easy',
        code:   "\n  function coercion(name) {\n    return name;\n  }",
        answer: "\n  function coercion(name) {\n    return !name;\n  }",
        test:   "coercion('Robert') → false",
        hints: [
            'Bang bang!',
            'Convert to truthy/falsey',
            'Insert exclamation mark before name'
        ]
    },
    {
        language: 'js',
        difficulty: 'hard',
        code:   "\n  function blockScope(num) {\n    for (var i = 0; i < num; i++) {\n      setTimeout(() => console.log(i), 1);\n    }\n  }",
        answer: "\n  function blockScope(num) {\n    for (let i = 0; i < num; i++) {\n      setTimeout(() => console.log(i), 1);\n    }\n  }",
        test:   "blockScope(3) → 0 1 2",
        hints: [
            'Right now it logs 3 3 3',
            'Wrong variable scoping',
            'Change var to let'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <p>Hello, world!<p>",
        answer: "\n  <p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Closing time',
            'Open, then open again?',
            'Insert / before second p'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <h1>Hello, world!</p>",
        answer: "\n  <h1>Hello, world!</h1>",
        test:   "One level-1 heading element",
        hints: [
            'Closing time',
            'Mismatch detected',
            'Change closing p tag to h1 tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <p>Hello, world!/p>",
        answer: "\n  <p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Less than',
            'Start from the end',
            'Insert less-than sign to left of closing p tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <p<Hello, world!</p>",
        answer: "\n  <p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'Wonky error',
            'The opening tag never ends!',
            'Fix opening p tag so it ends with >'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  </p>Hello, world!</p>",
        answer: "\n  <p>Hello, world!</p>",
        test:   "One paragraph element",
        hints: [
            'One slash is enough',
            'Two closing tags?',
            'Remove / from open p tag'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <img src='fun.jpg' alt='' >",
        answer: "\n  <img src='fun.jpg' alt='' />",
        test:   "Valid image element",
        hints: [
            'Self-closing tag',
            'Start from the end',
            'Add / just before the closing >'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "\n  <img src='horse.jpg' title='Horse' >",
        answer: "\n  <img src='fun.jpg' alt='Horse' />",
        test:   "Valid image element with alternative text",
        hints: [
            'Second attribute name',
            'Use the \'alt\'ernative',
            'Change title attribute to alt'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <p><copy>Copyright 2020</small></p>",
        answer: "\n  <p><small>Copyright 2020</small></p>",
        test:   "Paragraph with valid legal copy markup",
        hints: [
            'The small things in life',
            'Copy that',
            'Change copy to match small'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <ul>\n    <li>List item<il\\>\n  </ul>",
        answer: "\n  <ul>\n    <li>List item</li>\n  </ul>",
        test:   "Unordered list with one list item",
        hints: [
            'Wrong way, partner',
            'Flip-flop',
            'Change il to li'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <ul>\n    <li>List item</li>\n  </ol>",
        answer: "\n  <ul>\n    <li>List item</li>\n  </ul>",
        test:   "Unordered list with one list item",
        hints: [
            'A E I O or U',
            'Unexpected ending',
            'Change ol to ul'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "\n  <dl>\n    <dt>Term</dt>\n    <dd>Description</dt>\n  </dl>",
        answer: "\n  <dl>\n    <dt>Term</dt>\n    <dd>Description</dd>\n  </dl>",
        test:   "Definition list with one Term-Description pair",
        hints: [
            'Inspect the d\'s',
            'Find the mismatch',
            'Change third dt to dd'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "\n  <dl>\n    <dt/>Term</dt>\n    <dd>Description</dd>\n  </dl>",
        answer: "\n  <dl>\n    <dt>Term</dt>\n    <dd>Description</dt>\n  </dl>",
        test:   "Definition list with one Term-Description pair",
        hints: [
            'Inspect the d\'s',
            'Odd-looking opening tag',
            'Delete / after first dt'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <h1>\n    Heading text here\n  </hl>",
        answer: "\n  <h1>\n    Heading text here\n  </h1>",
        test:   "Level-1 heading",
        hints: [
            'That\'s not a list',
            'Start at the end',
            'Change l in closing tag to 1'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "\n  <img src='fun.jpg' alt='decoration' />",
        answer: "\n  <img src='fun.jpg' alt='' />",
        test:   "Valid decorative image element",
        hints: [
            'This one is about accessibility',
            'Fix the alt attribute',
            'Remove decoration from between the quotes'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <a link='http://google.com'>Google</a>",
        answer: "\n  <a href='http://google.com'>Google</a>",
        test:   "Hyperlink to Google",
        hints: [
            'Missing link',
            'Wrong attribute name',
            'Change link to href'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <img src='fun.jpg' with='200' />",
        answer: "\n  <img src='fun.jpg' width='200' />",
        test:   "200 pixel wide image",
        hints: [
            'Misspelling',
            'with and hite?',
            'Add d to change with to width'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <a href='about'>About us</a>",
        answer: "\n  <a href='#about'>About us</a>",
        test:   "Link to same-page element",
        hints: [
            'Think ID in CSS',
            'Hashtag',
            'Add # before about'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <input kind='text' />",
        answer: "\n  <input type='text' />",
        test:   "Text input field",
        hints: [
            'Need thesaurus',
            'Another 4-letter word',
            'Change kind to type'
        ]
    },
    {
        language: 'html',
        difficulty: 'hard',
        code:   "\n  <label for='name'>Name</label>\n  <input name='name' />",
        answer: "\n  <label for='name'>Name</label>\n  <input id='name' />",
        test:   "Label and it\'s associated input",
        hints: [
            '3 of 4',
            'One name is wrong',
            'Change name attribute to id'
        ]
    },
    {
        language: 'html',
        difficulty: 'normal',
        code:   "\n  <button id='primary'>Refresh</button>",
        answer: "\n  <button class='primary'>Refresh</button>",
        test:   "One of several primary buttons",
        hints: [
            'Hmm...one of several?',
            'An id is unique',
            'Change id attribute to class'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <head>\n    <title>Fix a function!</title>\n  </body>",
        answer: "\n  <head>\n    <title>Fix a function!</title>\n  </head>",
        test:   "Add a title to the document",
        hints: [
            'Start and stop',
            'Use your head',
            'Change closing tag to head'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <br/>",
        answer: "\n  <hr/>",
        test:   "Add a thematic break between paragraph-level elements.",
        hints: [
            'A.k.a. horizontal rule',
            'Make it an acronym',
            'Change br to hr'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <span lang='en'>\n    Hello, world!\n  </swan>",
        answer: "\n  <span lang='en'>\n    Hello, world!\n  </span>",
        test:   "Add a generic inline container for phrasing content",
        hints: [
            'Swan song',
            'Matching pairs required',
            'Change closing tag to span'
        ]
    },
    {
        language: 'html',
        difficulty: 'easy',
        code:   "\n  <p>\n    E=MC<sup>2</sub>\n  </p>",
        answer: "\n  <p>\n    E=MC<sup>2</sup>\n  </p>",
        test:   "Specify inline text which is to be displayed as superscript",
        hints: [
            'Sub, dogg?',
            'Retire the sub',
            'Change closing sub to sup'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  p {\n    font-size: 1em;\n  }",
        answer: "\n  p {\n    font-size: 2em;\n  }",
        test:   "Make all paragraphs two times the size of the current font",
        hints: [
            'Double it!',
            '1 + 1 = ...',
            'Change 1 to 2'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  img {\n    max-width: 100vh;\n  }",
        answer: "\n  img {\n    max-width: 100vw;\n  }",
        test:   "All images cannot exceed 100% of the viewport width",
        hints: [
            'Wrong unit',
            'Start from the end',
            'Change vh to vw'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  h1 > p {\n    color: black;\n  }",
        answer: "\n  h1 + p {\n    color: black;\n  }",
        test:   "Make all paragraphs placed immediately after a level-1 heading black",
        hints: [
            'Greater than?',
            'More like...addition',
            'Change > to +'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  .unique {\n    color: #987789;\n  }",
        answer: "\n  #unique {\n    color: #987789;\n  }",
        test:   "Make the element with id 'unique' warm gray",
        hints: [
            'No class',
            'Hashtag',
            'Change . before unique to #'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  h2 {\n    font-weight: normal;\n  }",
        answer: "\n  h3 {\n    font-weight: normal;\n  }",
        test:   "Make all level-3 headings normal font weight",
        hints: [
            'Find the number',
            'Level up!',
            'Change h2 to h3'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "\n  ul  {\n    margin-left: 0;\n  }",
        answer: "\n  ul li {\n    margin-left: 0;\n  }",
        test:   "Remove left margin from all list items inside all unordered lists",
        hints: [
            'Currently selecting the parent',
            'Missing portion of selector',
            'Insert li after ul'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  dt  {\n    margin-left: 0;\n  }",
        answer: "\n  dd {\n    margin-left: 0;\n  }",
        test:   "Remove left margin from all definition descriptors",
        hints: [
            'Wrong selector',
            'Not the term, the other part',
            'Change dt to dd'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "\n  a[href^='.pdf']::after {\n    content: '[PDF]';\n  }",
        answer: "\n  a[href$='.pdf']::after {\n    content: '[PDF]';\n  }",
        test:   "Insert content after every link that ends with .pdf",
        hints: [
            'Look inside the first brackets',
            'Look right after href',
            'Change ^ to $'
        ]
    },
    {
        language: 'css',
        difficulty: 'hard',
        code:   "\n  p + ul {\n    border-top: 2px solid black;\n  }",
        answer: "\n  p ~ ul {\n    border-top: 2px solid black;\n  }",
        test:   "Give each unordered list preceded by a paragraph a thin black border",
        hints: [
            'Wrong selector',
            'Wrong symbol',
            'Change + to ~'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  div p {\n    margin-top: 10px;\n  }",
        answer: "\n  div,p {\n    margin-top: 10px;\n  }",
        test:   "Add 10px margin to the top of all div and paragraph elements",
        hints: [
            'Wrong selector',
            'Missing symbol',
            'Insert comma between div and p'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  p,intro {\n    margin-top: 10px;\n  }",
        answer: "\n  p.intro {\n    margin-top: 10px;\n  }",
        test:   "Add 10px margin to the top of all paragraph elements with class intro",
        hints: [
            'Select one type of thing, not two',
            'intro isn\'t an element',
            'Change comma after p to dot'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  h3 {\n    margin-bottom: 10px;\n  }",
        answer: "\n  h3 {\n    margin-top: 10px;\n  }",
        test:   "Add 10px margin to the top of level-3 headings",
        hints: [
            'margin-what?',
            'Other parallel side',
            'Change bottom to top'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  p:last-child {\n    margin-top: 10px;\n  }",
        answer: "\n  p:first-child {\n    margin-top: 10px;\n  }",
        test:   "Add 10px margin to the top of every paragraph that is the first child of its parent",
        hints: [
            'Oh sweet child',
            'Last out, first in',
            'Change last to first'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  a:active {\n    color: purple;\n  }",
        answer: "\n  a:visited {\n    color: purple;\n  }",
        test:   "Set the color of all visited links to purple",
        hints: [
            'Wrong pseudo-selector',
            'Refer to the test',
            'Change active to visited'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  a {\n    color: 0000ff;\n  }",
        answer: "\n  a {\n    color: #0000ff;\n  }",
        test:   "Set the color of all links to blue",
        hints: [
            'Think twitter',
            'Hashtag',
            'Add a hashtag before the first 0'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  a {\n    color: rbga(0,0,255,1);\n  }",
        answer: "\n  a {\n    color: rgba(0,0,255,1);\n  }",
        test:   "Set the color of all links to opaque blue",
        hints: [
            'Between the bookends',
            'Out of order',
            'Swap b ang g so its rgba'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  a {\n    color: hsl(120, 100, 50%);\n  }",
        answer: "\n  a {\n    color: hsl(120, 100%, 50%);\n  }",
        test:   "Set the color of all links to green",
        hints: [
            'Incorrectly unitless',
            '100 what?',
            'Insert percent symbol after 100'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  a {\n    color: rad;\n  }",
        answer: "\n  a {\n    color: red;\n  }",
        test:   "Set the color of all links to red",
        hints: [
            'Killer, broh',
            'radrum?',
            'Change rad to red'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  .lego {\n    display: black;\n  }",
        answer: "\n  .lego {\n    display: block;\n  }",
        test:   "Each element with class lego should start on a new line and take up the whole width",
        hints: [
            'That\'s a color, silly',
            'Different vowel',
            'Change black to block'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  .two-dimensional {\n    display: flex;\n  }",
        answer: "\n  .two-dimensional {\n    display: grid;\n  }",
        test:   "Each element with class two-dimensional should be a block-level grid container",
        hints: [
            'Think perpendicular lines',
            'Think graph paper',
            'Change flex to grid'
        ]
    },
    {
        language: 'css',
        difficulty: 'normal',
        code:   "\n  .heavier {\n    font-wait: bold;\n  }",
        answer: "\n  .heavier {\n    font-weight: bold;\n  }",
        test:   "Each element with class heavier should have bold text",
        hints: [
            'Wait right there!',
            'Word play. Get it?',
            'Change wait to weight'
        ]
    },
    {
        language: 'css',
        difficulty: 'easy',
        code:   "\n  .push-down {\n    margin-up: 10px;\n  }",
        answer: "\n  .push-down {\n    margin-top: 10px;\n  }",
        test:   "Each element with class push-down should have 10px margin above it",
        hints: [
            'What\'s up?',
            'Up top!',
            'Change up to top'
        ]
    },
]