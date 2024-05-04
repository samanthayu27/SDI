const questions = [
    {
        type: 'Russian',
        question: 'Translate: улица',
        choice: ['Avenue', 'Boulevard', 'Street', 'Alleyway'],
        answer: 'Street',
    },
    {
        type: 'Russian',
        question: 'Translate: мне нужно',
        choice: ['I need', 'I can', 'I want', 'I like'],
        answer: 'I need',
    }, 
    {
        type: 'Russian',
        question: 'Translate: вода',
        choice: ['Soda', 'Water', 'Juice', 'Tea'],
        answer: 'Water'
    },
    {
        type: 'Russian',
        question: 'What is the prepositional case of "I" in Russian?',
        choice: ['я', 'мой', 'мной', 'мне'],
        answer: 'мне'
    },
    {
        type: 'Russian',
        question: 'How do you end feminine singular nouns ending in -a in dative case?',
        choice: ['e', 'ии', 'y', 'drop the -a'],
        answer: 'e'
    },
    {
        type: 'Russian',
        question: 'How do you change masculine singular adjectives ending in -ый in instrumental case?',
        choice: ['им', 'ей', 'ой', 'ым'],
        answer: 'ым'
    },
    {
        type: 'Russian',
        question: 'How do you say "certainly/of course" in Russian? ',
        choice: ['всегда', 'конечно', 'никогда', 'иногда'],
        answer: 'конечно'
    },
    {
        type: 'Russian',
        question: '',
        choice: ['', '', '', ''],
        answer: ''
    },
    {
        type: 'Russian',
        question: '',
        choice: ['', '', '', ''],
        answer: ''
    },
    {
        type: 'Russian',
        question: 'How would you conjugate "gray" in this sentence: ____ собака',
        choice: ['серые', 'серое', 'серая', 'серый'],
        answer: ''
    },
    {
        type: 'Russian',
        question: 'How would you conjugate egg in this sentence: я ел рис с _____',
        choice: ['яйцю', 'яйцем', 'яйцом', 'яичный'],
        answer: ''
    },
    {
        type: 'Russian',
        question: 'Do you use заниматься or играть if you want to say "to play basketball"',
        choice: ['заниматься', 'играть',],
        answer: 'играть'
    },
    {
        type: 'Russian',
        question: 'How do you conjugate учиться if you want to say "we учиться"',
        choice: ['учусь', 'учишься', 'учится', 'учимся'],
        answer: ''
    },
    {
        type: 'Russian',
        question: 'How to say to walk/stroll in Russian? ',
        choice: ['гулять', 'бежать', 'плавать', 'ездить'],
        answer: 'гулять'
    },
    {
        type: 'Russian',
        question: 'What is the translation of ребята',
        choice: ['Children', 'Friends', 'People', 'c'],
        answer: 'ребята'
    },
    {
        type: 'Psych',
        question: 'The biological clock that operates in human beings to adjust their functioning to night-and-day periodicity is referred to as',
        choice: ['A circadian rhythm','Spontaneous neural activity', 'The biofeedback monitor', 'A fixed-interval schedule', 'Active consciousness'],
        answer: 'A circadian rhythm',
    },
    {
        type: 'Psych',
        question: 'In treating a patient for depression, Dr. Pratt focuses on changing the ways in which the patient interprets events. Which type of therapy is Dr. Pratt using?',
        choice: ['Cognitive', 'Self-efficacy', 'Biomedical', 'Learning', 'Psychodynamic'],
        answer: 'Cognitive',
    },
    {
        type: 'Psych',
        question: 'Understanding that things continue to exist even when they are not within view is called',
        choice: ['Mental representation', 'Deep structure', 'A schema', 'Object permanence', 'Assimilation'],
        answer: 'Object permanence',
    },
    {
        type: 'Psych',
        question: 'Hallucination are characteristics of',
        choice: ['fugue', 'clincal depression', 'panic attacks', 'psychotic disorders', 'personality disorders'],
        answer: 'psychotic disorders',
    },    
    {
        type: 'Psych',
        question: 'Which of the following results of correlational studies inplies that environment contributes to the determination of IQ?',
        choice: ['Correlations are higher for identical twins than for fraternal twins', 'Correlations are higher for children and their biological parents than for children and their adoptive parents', 'Correlations are higher for parents and their children than for their husbands and wives', 'Correlations for two children in the same family are lower when one of the children is adopted than when both are the biological offspring of the parents', 'Correlations for children and their adoptive parents are statistically significant and positive'],
        answer: 'Correlations for children and their adoptive parents are statistically significant and positive',
    },
    {
        type: 'Psych',
        question: 'Which part of the nervous system is most immediately activated by sudden fear?',
        choice: ['Parasympathetic', 'Sympathetic', 'Neostriatum', 'Somnatic', 'Cortical'],
        answer: 'Sympathetic',
    },
    {
        type: 'Psych',
        question: 'All human languages have several basic sounds in common called',
        choice: ['Pheromones', 'Semantic units', 'Syntactic units', 'Morphemes', 'Phonemes'],
        answer: 'Phonemes',
    },
    {
        type: 'Psych',
        question: 'The sequence of shifts in the electical charge of a neuron is called',
        choice: ['Neural integration', 'Refraction', 'Synaptic transmission', 'the action potential', 'Differential conduction'],
        answer: 'the action potential',
    },
    {
        type: 'Psych',
        question: 'Mental shortcuts or rules of thumbs that help solve problems and reduce mental effort are called',
        choice: ['Heuristics', 'Algorithms', 'Syllogisms', 'Propositions', 'Concepts'],
        answer: 'Heuristics',
    },
    {
        type: 'Psych',
        question: 'Which of the following is a partial reinforcement schedule that is most resistant to extinction?',
        choice: ['Noncontingent', 'Shaping', 'Variable ratio', 'Fixed ratio', 'Fixed interval'],
        answer: 'Variable ratio',
    },
    {
        type: 'Psych',
        question: 'Memory for automatic activities, such as bike riding and handwriting, is known as',
        choice: ['declarative', 'semantic', 'sensory', 'procdural', 'repressed'],
        answer: 'procdural',
    },
    {
        type: 'Psych',
        question: 'Gender differences have most often been found in which of the following?',
        choice: ['Agression', 'Short-term memory', 'Auditory discrimination', 'Visual acuity', 'Pattern Matching'],
        answer: 'Agression',
    },
    {
        type: 'Psych',
        question: 'Vance is a popular honors student who, unlike his reference group, writes his best papers sitting on his motocyle in the basement of his college dormitory. His behavior can be considered abnormal only if abnormality is described as',
        choice: ['The need to rebel against authority', 'disintrest in the opinion of others', 'the perception of oneself as different', 'deviation from cultural norms', 'the inability to work in a group'],
        answer: 'deviation from cultural norms',
    },
    {
        type: 'US',
        question: '“At the time the first Europeans arrived, the Indians of the Great Plains between the Rocky Mountains and the forested areas bordering on the Mississippi lived partly by corn culture but mostly by the buffalo on foot with bow and arrow. Although Europeans regarded all Indians as nomads (a convenient excuse for denying them the land they occupied), only the Plains Indian really were nomadic. Even they did not become so until about A.D. 1550, when they began to break wild mustangs, offspring of European horses turned loose by the Spaniards.”  —”The Oxford History of the American People” by Samuel Eliot Morison, Oxford University Press, New York City, 1965 The excerpt suggests that Europeans used the lifestyle of American Indian tribes to justify',
        choice: ["Warfare and eradication of the native population", "Expansion into native lands", "The creation of an extensive trade network", "The creation of the encomienda system"], 
        answer: 'Expansion into native lands'
    }, 
    {
        type: 'US',
        question: 'Which of the following was a key event leading to the American Revolution?',
        choice: ['The Boston Tea Party', 'The Emancipation Proclamation', 'The Monroe Doctrine', 'The Battle of Gettysburg'],
        answer: 'The Boston Tea Party'
    },
    {
        type: 'US',
        question: 'Which of the following documents established the framework for the government of the United States after the Revolutionary War?',
        choice: [ 'The Declaration of Independence', 'The Articles of Confederation', 'The Bill of Rights', 'The Emancipation Proclamation'],
        answer: 'The Articles of Confederation'
    },
    {
        type: 'World',
        question: 'During the period of European colonization in Africa, many indigenous societies experienced significant changes in their social structures and cultures. One prominent example of cultural change was the introduction of new religions. Which of the following new religions had a significant impact on African societies during this period?',
        choice: ['Buddhism', 'Hinduism', 'Christianity','Zoroastrianism'],
        answer: 'Christianity'
    },
    {
        type: 'World',
        question: 'Which event marked the beginning of World War I?',
        choice: [ 'The assassination of Archduke Franz Ferdinand of Austria', 'The signing of the Treaty of Versailles', 'The sinking of the RMS Lusitania','The invasion of Poland by Nazi Germany'],
        answer: 'The assassination of Archduke Franz Ferdinand of Austria'
    },
    {
        type: 'World',
        question: '“Where the money is to come from which will defray this enormous annual expense of three millions sterling, and all those other debts, I know not; unless the author of Common Sense, or some other ingenious projector, can discover the Philosopher’s Stone, by which iron and other base metals may be transmuted into gold. Certain I am that our commerce and agriculture, the two principal sources of our wealth, will not support such an expense. The whole of our exports from the Thirteen United Colonies, in the year 1769, amounted only to £2,887,898 sterling; which is not so much, by near half a million, as our annual expense would be were we independent of Great Britain.” –Charles Inglis, Loyalist and Anglican clergyman of Trinity Church in New York City, New York, 1776. The financial situation described in the passage is best understood in the context of which of the following systems?', 
        choice: ["Feudalism", "Monarchism", "Liberalism", "Mercantilism"],
        answer: 'Mercantilism'
    },
];

export { questions };
