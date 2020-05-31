var listOfExercises = [
    {
        fn:     "\n  function double(n) {\n    return n  n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test: "double(1) → 2",
        hints: [
            'Read between the n\'s',
            'To double, must add',
            'Missing plus operator'
        ],
        difficulty: 'easy'
    },
    {
        fn:     "\n  function double() {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test: "double(1) → 2",
        hints: [
            'Where\'s it getting n from?',
            'Those parentheses look empty',
            'Missing parameter, n'
        ],
        difficulty: 'easy'
    },
    {
        fn:     "\n  function double(n) {\n    n + n;\n  }",
        answer: "\n  function double(n) {\n   return n + n;\n  }",
        test: "double(3) → 6",
        hints: [
            'To come back',
            'It adds, then throws away',
            'Missing return keyword'
        ],
        difficulty: 'easy'
    },
    {
        fn:     "\n   double(n) {\n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test: "double(4) → 8",
        hints: [
            'What is double?',
            'double isn\'t a function',
            'Missing function keyword'
        ],
        difficulty: 'easy'
    },
    {
        fn:     "\n  function double(n) \n    return n + n;\n  }",
        answer: "\n  function double(n) {\n    return n + n;\n  }",
        test: "double(5) → 10",
        hints: [
            'Where is the start?',
            'Function body missing a matching set',
            'Missing open curly brace'
        ],
        difficulty: 'easy'
    }
]