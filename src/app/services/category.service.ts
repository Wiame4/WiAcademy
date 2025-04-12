// import { Category } from './../Models/category.model';
import { Injectable } from "@angular/core";
import { Observable , of} from "rxjs";
import { Category } from "../Models/category.model";

@Injectable({
    providedIn : 'root'
})

export class CategoryService {
    constructor() { }
    getCategories() : Observable<Category[]> {
        const categories : Category[] = [
            {
                title : 'Web Development',
                picture : 'assets/images/12.gif',
                introduction : 'We are trying to provide you all the courses you need to be an expert web developer!',
                number : 21,
                courses : [
                    {
                        title: 'HTML 5',
                        attention : 'Master web development with our HTML5 course. Fun and engaging for beginners and pros alike. Build stunning web pages today!',
                        description : 'Dive into our HTML5 course and master the art of modern web development! You will learn to structure web content using the latest HTML5 standards, create accessible and engaging pages with semantic tags, and integrate multimedia seamlessly. We will cover building interactive forms, leveraging new input types, and applying responsive design principles to ensure your websites shine on any device. By the end, you will be equipped to build dynamic and well-designs web pages with confidence.',
                        picture : './assets/images/html.jpeg',
                        youtubePlaylist: 'https://www.youtube.com/embed/videoseries?list=PLknwEmKsW8OtLRQPTLms79499meY2D6ij',
                        numberOfVideos : 28,
                        documentationLink : 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                    },
                    {
                        title : 'CSS',
                        attention : 'Transform your web pages with our CSS course. Learn to design beautiful, responsive websites through a fun, hands-on experience.',
                        description : 'Unlock the power of web design with our CSS course! This course aims to to teach you how to style and enhance your web pages with precision and creativity. You will learn how to use CSS to create visually appealing layouts, apply various styling techniques, and ensure your websites are both responsive and user-friendly. We will cover fundamental concepts like selectors and properties, advanced techniques like animations and transitions, and best practices for maintaining consistent design across different devices. By the end, you will be equipped to bring your web projects to life with a stunning, polished designs. ',
                        picture : './assets/images/CSS.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLknwEmKsW8Os7rKViMCL8x6irVJT7McSS&si=pi4E04HGP3I71p0e',
                        numberOfVideos : 52,
                        documentationLink : 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                    },
                    {
                        title : 'JavaScript',
                        attention : 'Create dynamic, interactive web experiences with our JavaScript course. Join us for a fun journey and start coding today!',
                        description : 'Unlock the power of interactivity with our JavaScript course! Designed to equip you with essential programming skills, this course will teach you how to create dynamic, intractable web applications. You will start with the fundamentals of JavaScript, including variables, functions, and control structures, and advance to more complex topics like asynchronous programming and API integration. We will also cover modern JavaScript features, such as ES6+ syntax and frameworks. By the end of the course, you will have the skills to build responsive, feature-rich websites that engage users and enhance their experience.',
                        picture : './assets/images/javascript.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE&si=VzYhbjzoCgGkf4jw',
                        numberOfVideos : 80,
                        documentationLink : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    }, 
                    {
                        title : 'PHP', 
                        attention : 'Elevate your web development skills with our PHP course. Build powerful, dynamic websites and enjoy an interactive learning experience.',
                        description : 'Embark on a journey to dynamic web development with our PHP course! This course is designed to teach you the essentials of server-side scripting using PHP. You will learn to create robust, data-driven websites and applications by mastering PHP fundamentals, such as variables, arrays, and functions, along with advanced topics like object-oriented programming and database integration with MySQL. We will also cover best practices for security and performant optimization. By the end of the course, you will be equipped to build powerful, interactive web applications that efficiently manage and process data.',
                        picture : './assets/images/php.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLjwdMgw5TTLVDv-ceONHM_C19dPW1MAMD&si=aZtS3L46MankcQwb',
                        numberOfVideos : 68,
                        documentationLink : 'https://www.php.net/docs.php',
                    },
                    {
                        title : 'Python',
                        attention : 'Unlock coding secrets with our Python course. Master a versatile language and start creating amazing projects through a fun, engaging journey.',
                        description : 'Discover the versatility of coding with our Python course! This course aims to provide a solid foundation in Python programming, one of the most popular and powerful languages today. You will start with the basics, such as variables, data types, and control structures, and progress to more advanced concepts like object-oriented programming, data manipulation, and web scraping. We will also explore Python libraries and frameworks for data analysis, machine learning, and web development. By the end of this course, you will be equipped to tackle a wide range of programming challenge and build robust, scalable applications.',
                        picture : './assets/images/python.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLknwEmKsW8OsG8dnisr_-2WGyx7lpgGEE&si=TX1HMvlEJir91TUJ',
                        numberOfVideos : 53,
                        documentationLink : 'https://docs.python.org/3/',
                    },
                    {
                        title : 'Java', 
                        attention : 'Code like a pro with our Java course. Build robust applications through a fun, hands-on learning experience. Start creating today!',
                        description : 'Dive into the world of robust application development with our Java course! This course aims to provide you with a comprehensive understanding of Java, a powerful and versatile programming language. You will start with the fundamentals, including syntax, variables, and control structures, and progress to more advanced topics like object-oriented programming, exception handling, and multithreading. We will also cover Java libraries and frameworks for building desktop, web, and mobile applications. By the end of this course, you will have the skills to develop efficient, high-performance software solutions across various platforms.',
                        picture : './assets/images/java.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLZgKgfug7rBvlN76G7nLNlUjDnOQqc2_b&si=nOFMDIozWjc7Bqfy',
                        numberOfVideos : 60,
                        documentationLink : 'https://docs.oracle.com/en/java/',
                    },
                    {
                        title : 'TypeScript',
                        attention : 'Level up your JavaScript skills with our TypeScript course. Write robust, scalable code through a fun, interactive learning experience.',
                        description : 'Elevate your JavaScript with our TypeScript course! This course is designed to teach you how to build more robust and maintainable applications using TypeScript , a statically types superset of JavaScript. You will learn the essentials of TypeScript, including types, interfaces, and classes, and how to integrate TypeScript with existing JavaScript projects. We will also cover advanced features like generics, modules, and decorators. By the end of this course, you will be proficient in using TypeScript to write cleaner, more reliable code, enhancing your productivity and reducing bugs in your projects.',
                        picture : './assets/images/ts.jpeg',
                        youtubePlaylist :  'https://www.youtube.com/embed/videoseries?list=PLAhPJ5tzB6ALRWCae49De5C6aEs04PcCk&si=V4zhbpzEIeOH8k44',
                        numberOfVideos : 28,
                        documentationLink : 'https://www.typescriptlang.org/docs/',
                    },
                    {
                        title : 'Bootstrap', 
                        attention : 'Master stunning, responsive web design with our Bootstrap course. Enjoy a fun, hands-on experience and start creating beautiful pages today!',
                        description : 'Transform your web design skills with our Bootstrap course! This course aims to teach you how to create responsive, mobile-first websites quickly and efficiently using the Bootstrap framework. You will learn the fundamentals of Bootstrap, including its grid system, components, and utilities. We will also cover customizing Bootstrap to fit you project unique style, integrating JavaScript plugins, and best practices for ensuring cross-browser compatibility. By the end of this course, you will be equipped to build modern, professional-looking websites with ease and confidence.',
                        picture : './assets/images/boot.jpeg',
                        youtubePlaylist : ' https://www.youtube.com/embed/videoseries?list=PLxbVBWjVdAEjom8KOV1c9aXMCz4IE0OZy&si=sk6wP4mfA-eHzyu4',
                        numberOfVideos : 18,
                        documentationLink : 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
                    },
                    {
                        title : 'Ruby',
                        attention : 'Master elegant coding with our Ruby course. Build amazing projects using this beginner-friendly language.',
                        description : 'Unlock the elegance of programming with our Ruby course! This course aims to teach you the fundamentals of Ruby, a dynamic and intuitive programming language known for its simplicity and productivity. You will learn basic concepts such as variables, loops, and conditionals, and progress to more advanced topics like object-oriented programming, modules, and mixins. We will also cover practical applications, including web development with Ruby on Rails. By the end of this course, you will be equipped to write clean, efficient code and develop sophisticated applications with ease.',
                        picture : './assets/images/ruby.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLhiFu-f80eo9cXpAh2Kv0m6Aq0eSWT8MC&si=Zkoa6HnYf7Vbzc9_',
                        numberOfVideos : 23,
                        documentationLink : 'https://www.ruby-lang.org/en/documentation/',
                    },
                    {
                        title : 'C#',
                        attention : 'Master C# with our course for powerful applications in web development and game design. Enjoy an engaging, hands-on experience.',
                        description : 'Embark on a journey to master C# with our comprehensive course! This course aims to equip you the skills needed to develop robust applications using #C, a versatile and widely-used programming language. You will start with the basics, such as syntax, variables, and control structures, and progress to more advanced topics like object-oriented programming, LINQ, and asynchronous programming. We will also cover practical applications in web development with ASP.NET and game development with Unity. By the end of this course, you will be proficient in C# and capable of creating powerful, scalable software solutions.',
                        picture : './assets/images/c-sharp.jpeg',
                        youtubePlaylist : ' https://www.youtube.com/embed/videoseries?list=PLrSOXFDHBtfGBHAMEg9Om9nF_7R7h5mO7&si=o_nkUPHtRmG9JnnR',
                        numberOfVideos : 35,
                        documentationLink : 'https://learn.microsoft.com/en-us/dotnet/csharp/',
                    },
                    {
                        title : 'SQL', 
                        attention : 'Unlock database power with our SQL course. Manage and query data efficiently through a fun, hands-on learning experience.',
                        description : 'Unlock the power of data management with our SQL course! This course aims to provide you with a solid foundation in SQL, the essential language for interacting with relational databases. You will learn how to write queries to retrieve, insert, update, and delete data, as well as how to use joins, subqueries, and aggregations to analyze and manipulate data effectively. We will also cover database design principles and optimization techniques to ensure your queries run efficiently. By the end of this course, you will be skilled in managing and analyzing data, making you a valuable asset in any data-driven role.',
                        picture : './assets/images/sql.jpeg',
                        youtubePlaylist : ' https://www.youtube.com/embed/videoseries?list=PLrSOXFDHBtfGl66sXijiN8SU9YJaM_EQg&si=996GWZtVG7cxr0VZ',
                        numberOfVideos : 22,
                        documentationLink : 'https://sql.sh/',
                    },
                    
                    
                    {
                        title : 'Angular',
                        attention : 'Master powerful, scalable web applications with our Angular course. Enjoy an engaging, hands-on experience and build dynamic apps today!',
                        description : 'Elevate your web development skills with our Angular course! This course aims to provide a comprehensive understanding of Angular, a powerful framework for building dynamic, single-page applications. You will start with the fundamentals, such as components, templates, and data binding, and move on to advanced topics like routing, forms, and state management with RxJS. We will also cover best practices for testing, optimization, and deploying Angular applications. By the end of this course, you will be equipped to create sophisticated, high-performance web apps with Angular.',
                        picture : './assets/images/Angular.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLOxeTbzofqeVNCz8PdOEXjL8xMueFRV7n&si=bHhUS9wbJR6I7kpN',
                        numberOfVideos : 99,
                        documentationLink : 'https://v17.angular.io/docs',
                    },
                    
                    {
                        title : 'Django', 
                        attention : 'Master Django for powerful web apps. Build robust, scalable projects with Python through hands-on experience.',
                        description : 'Dive into web development with our Django course! This course aims to teach you how to build robust, scalable web applications using Django, a high-level Python framework. You will start with the basics, such as setting uo a project, creating models, and handling view, and progress tp advanced topics like authentication, form handling, and deploying Django applications. We will also cover best practices for using Djangos built-in features, such as the admin interface and ORM, to streamline development. By the end of this course, you will be equipped to create powerful web apps efficiently and effectively.',
                        picture : './assets/images/django.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLknwEmKsW8OtK_n48UOuYGxJPbSFrICxm&si=snh2VMwH0_GPwb4f',
                        numberOfVideos : 38,
                        documentationLink : 'https://docs.djangoproject.com/en/5.1/',
                    },
                    {
                        title : 'Flask',
                        attention : 'Master Flask for scalable web apps. Build dynamic projects with our Python minimalist framework through hands-on learning.',
                        description : 'Dive into web development with our Flask course! This course is designed to teach you how to build lightweight, flexible web applications using Flask, a micro-framework for Python. You will start with the basics, including routing, templates, and request handling, and advance to more complex topics like database integration, user authentication, and creating RESTful APIs. We will also cover best practices for structuring your Flask projects and deploying your applications. By the end of this course, you will be proficient in building scalable web applications and APIs with Flask powerful yet simple tools.',
                        picture : './assets/images/flask.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL6X8IkNltYY_MgJNuEX-S1OABlAGOVUUw&si=7HAYc5X_4hbNd-K3',
                        numberOfVideos : 19,
                        documentationLink : 'https://flask.palletsprojects.com/en/3.0.x/',
                    },
                    {
                        title : 'Ruby on Rails',
                        attention : 'Master scalable web applications with our Ruby on Rails course. Learn to build dynamic apps using Rails elegant conventions and tools.',
                        description : 'Unlock the power of web development with our Ruby on Rails course! This course aims to teach you how to build high-quality, scalable web applications using Ruby on Rails, a powerful and efficient framework. You will start with the basics, such as setting up Rails projects, creating models, and handling controllers and views, and advance to more complex topics like working with databases, user authentication, and API integration. We will also cover best practices for testing, debugging, and deploying Rails applications. By the end of this course, you will be equipped to develop sophisticated web apps with Rail"s elegant conventions and tools',
                        picture : './assets/images/Ruby on Rails.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLm8ctt9NhMNV75T9WYIrA6m9I_uw7vS56&si=K-xpwVRp-63cNs66',
                        numberOfVideos : 45,
                        documentationLink : 'https://guides.rubyonrails.org/',
                    },
                    {
                        title : 'Laravel',
                        attention : 'Master elegant, high-performance web applications with our Laravel course. Learn to create robust, modern apps using Laravel intuitive tools.',
                        description : 'Unlock the potential of modern PHP development with our Laravel course! This course is designed to teach you how to build sophisticated, scalable web applications using Laravel, a robust PHP framework. You will start with the basics, such as routing, controllers, and views, and progress to more advanced topics like Eloquent ORM, authentication, and API development. We will also cover best practices for testing, optimizing, and deploying Laravel applications. By the end of this course, you will be proficient in leveraging Laravel"s powerful features to develop elegant, high-performance apps.',
                        picture : './assets/images/laravel.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLDoPjvoNmBAy_mAhY0x8cHf8oSGPKsEKP&si=Irx5Bf2PRc2Q41i2',
                        numberOfVideos : 21,
                        documentationLink : 'https://laravel.com/docs/11.x/installation',
                    },
                    {
                        title : 'Spring Boot',
                        attention : 'Master Java applications with our Spring Boot course. Learn to build scalable, high-performance apps using its intuitive tools and best practices.',
                        description : 'Elevate your Java development skills with our Spring Boot course! This course is designed to teach you how to build production-ready, scalable applications using Spring Boot, a powerful framework that simplifies Java development. You will start with the basics, including setting up projects, configuring dependencies, and creating RESTful APIs, and advance to more complex topics such as security, data access with Spring Data, and deploying applications. We will also cover best practices for testing, optimizing, and managing your Spring Boot applications. By the end of this course, you will be equipped to develop robust, high-performance Java applications efficiently with Spring Boot.',
                        picture : './assets/images/spring boot.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLzhWJrmO-SPX9CwimKF2-l0e0dcLEiAI2&si=q7u0LxIrOJkYvZ3i',
                        numberOfVideos : 42,
                        documentationLink : 'https://devdocs.io/spring_boot/'
,                    },
                    {
                        title : "ASP.NET Core",
                        attention : 'Master ASP.NET Core for cross-platform, high-performance apps using modern tools and best practices.',
                        description : 'Unlock the power of modern web development with our ASP.NET Core course! This course aims to to teach you how to build high-performance, cross-platform web applications using ASP.NET Core, Microsoft"s advanced framework. You will start with the basics, including setting up projects, creating RESTful APIs, and working with middleware, and progress to more advances topics like security, dependency injection, and entity framework integration. We will also cover best practices for testing, deployment, and performance optimization. By the end of this course, you will be proficient in developing scalable, secure web applications with ASP.NET Core.',
                        picture : './assets/images/asp.png',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLP2annhKA6KyzN8bHOouqlBmPFLdb0xpu&si=1VnSFPeaDYH0mPSb',
                        numberOfVideos : 53,
                        documentationLink : 'https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0',
                    },
                    {
                        title : 'MongoDB',
                        attention : 'Master data management with our MongoDB course. Build scalable solutions using this leading NoSQL database through interactive learning.',
                        description : 'Dive into the world of NoSQL databases with our MongoDB course! This course is designed to teach you how to efficiently manage and query data using MongoDB, a leading NoSQL database. You will start with the basics, including database setup, CRUD operations, and data modeling, and advance to more complex topics like indexing, aggregation, and performance optimization. We will also cover best practices for integrating MongoDB with various applications and handling large datasets. By the end of this course, you will be equipped to build scalable, high-performance data solutions with MongoDB.',
                        picture : './assets/images/mongodb.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA&si=st2QlmJuPenCEoDw',
                        numberOfVideos : 25,
                        documentationLink : 'https://www.mongodb.com/docs/',
                    },
                    {
                        title : 'GraphQL',
                        attention : 'Master API development with our GraphQL course. Create efficient, flexible APIs using modern features through engaging, hands-on experience.',
                        description : 'Unlock the future of API development with our GraphQL course! This course aims to teach you how to design and implement efficient, flexible APIs using GraphQL, a powerful query language for APIs. You will start with the basics, including setting uo a GraphQL server, defining schemas, and writing queries and mutations. We will also cover advanced topics like optimizing performance, integrating with databases, and handling authentication and authorization. By the end of this course, you will be proficient in using GraphQL to create dynamic, high-performance APIs that provide exactly the data clients need.',
                        picture : './assets/images/graphQL.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&si=Uy7ynocCK0mUnRAj',
                        numberOfVideos : 9,
                        documentationLink : 'https://graphql.org/learn/',
                    },
                
                    {
                        title : 'Gulp',
                        attention : 'Master task automation with our Gulp course. Streamline builds, optimize code, and enhance front-end workflows through hands-on learning.',
                        description : ' Transform your development workflow with our Gulp course! This course is designed to teach you how to use Gulp, a popular task runner, to automate and optimize your build processes. You’ll start with the basics, including setting up Gulp, creating tasks, and automating routine tasks like minification, compilation, and file concatenation. We’ll also cover advanced topics such as integrating Gulp with other tools, optimizing build performance, and managing workflows efficiently. By the end of the course, you’ll be skilled in using Gulp to streamline your development process and enhance productivity.',
                        picture : './assets/images/gulp.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLDoPjvoNmBAxyli7mXgNBhkRB-zgSHvL8&si=7RGEw8xUY0WxN00e',
                        numberOfVideos : 18,
                        documentationLink : 'https://gulpjs.com/'
                    }

                ]
            },
            {
                title : 'Design',
                picture : './assets/images/design1.gif',
                introduction : 'Ignite your creativity with our design courses!',
                number : 25,
                courses: [
                    {
                        title : 'Graphic Design',
                        attention : 'Transform your creativity with our graphic design course! Master essential design principles, software tools, and techniques to create stunning visuals.',
                        description : 'Dive into our graphic design course, crafted to teach you the fundamentals of visual design, including principles, software tools, and techniques. You will begin with core concepts such as color theory, typography, and layout design. As you advance, you will tackle more advanced topics like branding, digital illustration, and user interface design. By the end of this course, you will be skilled in graphic design, ready to create impactful visuals and projects with confidence.',
                        picture : './assets/images/graphic-design.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn&si=IoqXRaho3xvjxp7o',
                        numberOfVideos : 46,
                        documentationLink : 'https://m3.material.io/'
                    },
                    {
                        title : 'Web Design',
                        attention : 'Elevate your skills with our web design course! Learn essential design principles, coding, and tools to create stunning websites.',
                        description : 'Discover our web design course, designed to teach you fundamental web design concepts, coding languages, and creative tools. You will start with core topics such as HTML, CSS, and responsive design principles. As you progress, you will explore advanced areas like JavaScript, user experience design, and website optimization techniques. By the end of this course, you will be equipped to design and build visually appealing and functional websites with confidence.',
                        picture : './assets/images/web-design.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLXC_gcsKLD6n7p6tHPBxsKjN5hA_quaPI&si=ntpa6Q8RR3r8GHVI',
                        numberOfVideos : 20,
                        documentationLink : 'https://developer.mozilla.org/en-US/docs/Web'
                    },
                    {
                        title : 'Design Thinking',
                        attention : 'Unlock innovation with our design thinking coure! Master problem-solving techniques, creativity stategies, ans user-centered approaches to drive impactful solutions.',
                        description : ' Immerse yourself in our design thinking course, designed to teach you key problem-solving methodologies and creative strategies. Begin with foundational steps like empathy mapping and defining user needs. As you advance, explore more advanced techniques such a ideation, prototying, and testing solutions. By the end of this course, you will be equipped to apply design thinking principles to drive innovation and create impactful solutions across various challenges.',
                        picture : './assets/images/design-thinking.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLJOFJ3Ok_idsNfN2V_eSrdD0BojK5yFgV&si=W52ajLlpxOk_ESrI',
                        numberOfVideos : 27,
                        documentationLink : 'https://asana.com/resources/design-thinking-process'
                    },
                    {
                        title : 'Figma',
                        attention : 'Enhance your design skills with our Figma course! Master the tool features, collaborate effectively, and stunning designs effortlessly.',
                        description : 'Explore our Figma course, designed to teach you the fundamentals of this powerful design tool. Begin with basic features like frame creation and component use. As you advance, dive into more sophisticated topics such as prototyping, collaboration techniques, and advanced design systems. By the end of this course, you will be proficient in Figma, ready to create and manage high-quality designs with confidence.',
                        picture : './assets/images/figma.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL23axQnIWNavbPGpF581gHtd5UspmkDOb&si=KVm5OON5fW5ugY_o',
                        numberOfVideos : 13,
                        documentationLink : 'https://help.figma.com/hc/en-us'
                    },
                    {
                        title : 'Adobe XD',
                        attention : 'Unlock your design potential with our Adobe XD course! Master UI/UX design, prototyping, and collaboration to create exceptional digital experiences.',
                        description : 'Discover our Adobe XD course, tailored to teach you the core aspects of this design tool. Begin with the basics like creating artboards and designing wireframes. As you progress, delve into more advanced features such as interactive prototypes, user flows, and collaboration techniques. By the end of this course, you will be skilled in using Adobe XD to design and prototype engaging digital experiences with confidence..',
                        picture : './assets/images/adobe-xd.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL4cUxeGkcC9hOQFhUxCE8z1aB3OpwKXaJ&si=nzLOMCtNTr-oCWsP',
                        numberOfVideos : 20,
                        documentationLink : 'https://developer.adobe.com/xd/uxp/'
                    },
                    {
                        title : 'Sketch',
                        attention : 'Transform your design workflow with our Sketch course! Learn to create stunning interfaces, prototypes, and design systems with ease.',
                        description : 'Explore our Sketch course, designed to teach you the fundamentals of this powerful design tool. Statr with basics like creating artboards and using vector tools. As you advance, dive into more complex topics such as symbol creation, prototyping, and design systems. By the end of this course, you will be proficient in Sketch, ready to design and iterate on high-quality digital interfaces with confidence. ',
                        picture : './assets/images/sketch.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLdIDMj3VSgBfRYygdixt6Msj2c5K8Kmfg&si=hDVMx8tDPwGh1zzv',
                        numberOfVideos : 40,
                        documentationLink : 'https://www.sketch.com/docs/'
                    },
                    {
                        title : 'InVision',
                        attention : 'Elevate your design skills with our InVision course! Master prototyping, collaboration, and design workflows to create impactful digital experiences.',
                        description : ' Discover our InVision course, crafted to teach you essential skills for using this design platform effectively. Begin with core topics like creating prototypes and designing intearctive elements. As you progress, explore advanced features such as collaboration tools, feedback integration, and design system management. By the end of this course, you will be adept at using InVision to streamline your design process and enhance team collaboration with confidence.',
                        picture : './assets/images/invision.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLmnlf2vAlcwkrL6i_uhPmVl7JBFgpSm0J&si=d58DqS5LQ2V5wLgR',
                        numberOfVideos : 18,
                        documentationLink : 'https://support.invisionapp.com/docs/documentation-features'
                    },
                    {
                        title : 'Adobe Photoshop',
                        attention : 'Unleash your creativity with our Adobe Photoshop course! Learn advanced techniques, photo editing, and design skills to create stunning visuals.',
                        description : 'Explore our Adobe Photoshop course, designed to teach you the essentials of this powerful design tool. Begin with basic techniques such as photo retouching and layer management. As you advance tackle more complex skills like advanced editing, digital painting, and creating composites. By the end of this course, you will be skills in using Photoshop to craft professional-quality visuals and enhance your creative projects with confidence.',
                        picture : './assets/images/adobe-photoshop.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLLlSBGLVsEPIFGSGw2zJ2K43V5vxMMMTE&si=J-HRLNHUfEtHbTZb',
                        numberOfVideos : 12,
                        documentationLink : 'https://helpx.adobe.com/support/photoshop.html'
                    },
                    {
                        title : 'Adobe Illustrator',
                        attention : 'Master Adobe Illustrator with our course! Learn vector design, illustration techniques, and creative tools to bring your graphics to life.',
                        description : 'Explore our Adobe Illustrator course, designed to introduce you to the essentials of vector graphic design. Start with fundamental tools like shapes and paths. As you progress, delve into more advanced techniques such as creating complex illustrations, working with typography, and designing logos. By the end of this course, you will be proficient in Illustrator, ready to create professional graphics and enhance your creative projects with confidence.',
                        picture : './assets/images/adobe-illustrator.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLYfCBK8IplO4X-jM1Rp43wAIdpP2XNGwP&si=nTBX7kzJzoRlqzO4',
                        numberOfVideos : 20,
                        documentationLink : 'https://helpx.adobe.com/support/illustrator.html'
                    },
                    {
                        title : 'Zeplin',
                        attention : 'Streamline your design process with our Zeplin course! Learn to manage design handoff, collaborate efficiently, and generate accurate style guides.',
                        description : 'Explore our Zeplin course, designed to teach you how to streamline your design workflow and enhance collaboration. Start with basic features like creating design specs and generating style guides. As you advance, delve into more complex topics such as integrating with design tools, managing design systems, and optimizing handoff processes. By the end of this course, you will be proficient in Zeplin, ready to efficiently manage design projects and collaborate semalessly with your team.',
                        picture : './assets/images/Zeplin.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLgwNtYvZGv9Q1UdyBew1FdnYBON_Z-4NV&si=HBaeGtc9JCXpRPSr',
                        numberOfVideos : 7,
                        documentationLink : 'https://zeplin.io/'
                    }
                ]
            },
            {
                title : 'Languages',
                picture : './assets/images/lang.gif',
                introduction : 'Expand your horizons with our language courses and unlock new worlds of communication!',
                number : 12,
                courses: [
                    {
                        title : 'French',
                        attention : 'Immerse yourself in the  beauty of French! Our course offers engaging lessons, cultural insights, and practical skills to master the language effortlessly.',
                        description : 'Unlock the beauty of the French language with our comprehensive course! Desgined for learners of all levels, this course guides you through essential grammar, vocabulary, and pronunciation. Begin with foundational skills like basic phrases and sentence structure, and progress to advanced topics such as conversational fluency and cultural nuances. You will practice speaking, listening, reading, and writing, with interactive exercises and real-life scenarios. By the end of this course, you will confidently navigate French conversations, appreciate French culture, and enhance your global communication skills.',
                        picture : './assets/images/french.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLKemiRG53ou5Ax0fPcLW8FavBWN5ie77J&si=Q7F1c5UM4cDiKkvr',
                        numberOfVideos : 120,
                        documentationLink : 'https://apprendre.tv5monde.com/'
                    },
                    {
                        title : 'Spanish',
                        attention : 'Master Spanish effortlessly with our engaging course! Learn essential grammar, vocabulary, and conversation skills to speak fluently and confidently.',
                        description : 'Immerse yourself in the Spanish language with our dynamic course! This course is designed to guide you through essential grammar, vocabulary, and conversational skills. You will start with fundamental elements like greetings and basic sentence structure, then progress to more complex topics such as verb conjugations, cultural expressions, and fluent communication. We will also explore practical applications, including real-life dialogues and listening exercises. By the end of this course, you will confidently engage in Spanish conversations, appreciate diverse Spanish-speaking cultures, and enhance your global communication abilities.',
                        picture : './assets/images/spanish.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLv63dFTP4Sjq6knRsZQI-bTnRE38cZZoy&si=1kRdh_Lw4nIlqGkf',
                        numberOfVideos : 153,
                        documentationLink : 'https://www.spanishdict.com/'
                    },
                    {
                        title : 'Arabic ',
                        attention : ' Discover the richness of Arabic course! It covers essential grammar, vocabulary, and conversation skills to help you speak fluently.',
                        description : 'Dive into the Arabic language with our comprehensive course! Designed to introduce you to Arabic script, grammar, and proununciation, this course starts with the basics, such as mastering the alphabet and essential phrases. You will progress to more advanced topics, including complex sentence structures, verb conjugations, and cultural context. We also offer practical exercises and conversational practice to reinforce your learning. By the end of this course, you will be able to read, write, and speak Arabic confidently, enriching your global communication skills and cultural understanding.',
                        picture : './assets/images/arabic.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLFlfo80nCwAbsNtnjUfWCp9pDYIzb0nQd&si=QZpAABu84NbDXVeB',
                        numberOfVideos : 27,
                        documentationLink : 'https://www.arabicpod101.com/'
                    },
                    {
                        title : 'German ',
                        attention : 'Unlock the German language with ease! Our course offers engaging lessons on grammar, vocabulary, and conversation to achieve fluency.',
                        description : 'Elevate your language skills with our German course! This course is designed to teach you essential German grammar, vocabulary, and prounuciation. You will begin with the fundamentals, such as greetings, basic sentence structure, and common phrases. As you advance, you will explore more complex topics like verb tenses, sentence formation, and cultural nuances. By the end of this course, you will be proficient in Gerlan, ready to engage confidently in both written and spoken comunication.',
                        picture : './assets/images/german.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW&si=zO6Gs-t_rXJ49LZW',
                        numberOfVideos : 69,
                        documentationLink : 'https://www.deutschakademie.de/online-deutschkurs/'
                    },
                    {
                        title : 'Italian ',
                        attention : 'Explore the charm of Italian! Our course offers engaging lessons on grammar, vocabulary, and conversation to help you speak confidently.',
                        description : 'Immerse yourself in Italian with our comprehensive course! This course is designed to teach you essential grammar, vocabulary, and pronunciation. You will start with the basics, including common phrases and sentence structures. As you advance, you will delve into more complex topics such as verb conjugations and cultural nuances. By the end of this course, you will be proficient in Italian, ready to confidently navigate conversations and understand the rich culture of Italy.',
                        picture : './assets/images/italian.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLUcDBadaP5IUJYW6qn2jTH0Ik2EMvAPze&si=WfLejPj-y3A5wCyE',
                        numberOfVideos : 32,
                        documentationLink : 'https://www.italianpod101.com/'
                    },
                    {
                        title : 'Chinese (Mandarin) ',
                        attention : 'Unlock the world of Mandarin Chinese! Our course covers essential grammar, vocabulary, and pronunciation to help you speak confidently.',
                        description : 'Unlock the potentil of Mandarin Chinese with our comprehnesive course! This course is designed to teach you essential Chinese grammar, vocabulary, and pronunciation. You will start with foundational elements such as basic phrases, tones, and sentence structure. As your progress, you will explore advanced topics including complex sentence formations, character writing, and cultural contexts. By the end of this course, you will be proficient in Mandarin, ready to engage confidently in various personal and professional settings.',
                        picture : './assets/images/chinese.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLrYgra2FrMh_jGBcMmNWPnSh-kHwGiaXG&si=a4593VliTUACqJoL',
                        numberOfVideos : 41,
                        documentationLink : 'https://www.chinesepod.com/'
                    },
                    {
                        title : 'Japanese',
                        attention : 'Discover Japanese with our engaging course! Master essential grammar, vocabulary, and pronunciation to confidently speak and understand Japanese.',
                        description : 'Explore the Japanese language with our comprehensive course! This course is designed to teach you essential Japanese grammar, vocabulary, and pronunciation. You’ll start with the basics, including learning hiragana, katakana, and basic sentence structures. As you advance, you will delve into more complex topics such as kanji characters, verb conjugations, and cultural expressions.  By the end of the course, you’ll be proficient in Japanese, ready to navigate conversations and understand Japanese culture with confidence.',
                        picture : './assets/images/japanese.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLPSfPyOOcp3Tes7RGG42W_zbLESN7y32i&si=JXXS1OQBOaEorptU',
                        numberOfVideos : 33,
                        documentationLink : 'https://www.japanesepod101.com/'
                    },
                    {
                        title : 'Korean',
                        attention : 'Unlock the beauty of Korean! Learn to speak, read, and write fluently with our engaging and interactive language course. ',
                        description : 'Explore the Korean language with our comprehensive course! This course is designed to teach you essential Korean grammar, vocabulary, and pronunciation. You will start with the basics, including learning Hangul, sentence structures, and key expressions. As you advance, you will dive into more complex topics such as verb conjugations, honorifics, and cultural nuances. By the end of this course, you will be proficient in Korean, ready to engage in conversations and gain a deeper understanding of Korean culture with confidence.',
                        picture : './assets/images/korean.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLbFrQnW0BNMUkAFj4MjYauXBPtO3I9O_k&si=fVDminDlRXTe18QI',
                        numberOfVideos : 100,
                        documentationLink : 'https://talktomeinkorean.com/'
                    },
                    {
                        title : 'Portuguese',
                        attention : 'Master Protuguese with ease! Join our course to confidently speak, read, and write while exploring Brazil vibrant culture',
                        description : 'Explore the Portuguese language with our comprehensive course! This course is designed to teach you essential Portuguese grammar, vocabulary, and pronunciation. You will begin with the basics, including common phrases, verb conjugations, and sentence structures. As you progress, you will tackle more advanced topics like complex tenses, idiomatic expressions, and cultural insights from Brazil and Portugal. By the end of this course, you will be proficient in Portuguese, equipped to navigate conversations and immerse yourself in Lusophone cultures with confidence.',
                        picture : './assets/images/portuguese.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLOI_4Hs_tAsDI8QRQFzmG4fdMgdV81adD&si=9SBE5gWHWmwLz2bA',
                        numberOfVideos : 73,
                        documentationLink : 'https://www.portuguesepod101.com/'
                    },
                    {
                        title : 'Russian',
                        attention : 'Learn Russian with ease! Join our engaging course to master speaking, reading, and writing while exploring Russia rich culture.',
                        description : ' Discover the Russian language with our in-depth course! This program is designed to teach you essential Russian grammar, vocabulary, and pronunciation. You will begin with the basics, such as learning the Cyrillic alphabet, simple sentence structures, and everyday phrases. As you progress, you will explore more advanced topics like verb aspects, complex sentence formation, and cultural expressions unique to Russian-speaking regions. By the end of this course, you will be fluent in Russian, confident in engaging in conversations, and equipped to understand Russian culture on a deeper level.',
                        picture : './assets/images/russian.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLx1Hrg5Bg3xrnm30dNPZ5q2R9J6Zz2vUq&si=HxBzDydNIFQgj_sd',
                        numberOfVideos : 23,
                        documentationLink : 'https://www.russianpod101.com/'
                    },
                    {
                        title : 'Hindi',
                        attention : 'Learn Hindi effortlessly! Join our interactive course to master speaking, reading, and writing while exploring India rich culture and heritage.',
                        description : 'Immerse yourself in the Hindi language with our detailed course! This course is designed to teach you essential Hindi grammar, vocabulary, and pronunciation. You will start with the basics, learning the Devanagari script, common phrases, and sentence structures. As you progress, you will tackle more advanced concepts like verb conjudations, sentence formation, and regional expressions. By the end of this course, you will be proficient in Hindi, ready to engage in conversations, and gain a deeper understanding of Indian culture with confidence.',
                        picture : './assets/images/hindi.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLdb6KKzTz-by4IuO4qsG8JZokr4ouvFH4&si=7ij8NKZq8EUrzGnP',
                        numberOfVideos : 175,
                        documentationLink : 'https://www.hindipod101.com/'
                    },
                    {
                        title : 'Turkish',
                        attention : 'Unlock the beauty of Turkish! Join our engaging course to confidently speak, read, and write while exploring Turkey rich culture.',
                        description : ' Discover the Turkish language with our comprehensive course! This course is designed to teach you key Turkish grammar, vicabulary, and pronunciation. You will begin with the basics, such as learning the Turkish alphabet, simple sentence structures, and essential phrases for everyday use. As you progress, you will dive into more advanced topics like verb tenses, sentence composition, and regional expressions. By the end of this course, you will be confident in your Turkish skills, ready to engage in conversations and gain a deep understanding of Turkish culture and traditions.',
                        picture : './assets/images/turkish.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLZP44vWcKKfas3O_Hj0jqBswZFtf_6mi7&si=ZsemO8S2c03uC5zi',
                        numberOfVideos : 64,
                        documentationLink : 'https://www.turkishclass101.com/'
                    }
                    
                ]
            },
            {
                title : 'Data Science',
                picture : './assets/images/data-science.gif',
                introduction : 'Explore Data Science courses covering machine learning, statistics, and analytics.',
                number : 5,
                courses : [
                    {
                                    title : 'Introduction to Data Science with Python',
                                    attention : 'Unlock the power of data with Python in this beginner-friendly course, mastering essential tools for analysis and visualization.',
                                    description : 'The "Introduction to Data Science with Python" course offers a comprehensive foundation in data analysis, teaching key concepts such as data manipulation, visualization, and statistical analysis using Python  powerful libraries like Pandas, NumPy, and Matplotlib. Ideal for beginners, the course guides you through real-world examples, helping you understand how to derive insights from data and apply machine learning techniques. By the end, you will have the skills to handle datasets, create visual representations, and make data-driven decisions, preparing you for more advanced studies or a career in data science.',
                                    picture : './assets/images/data-science-python.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV&si=To2op_XyCXYIRmua',
                                    numberOfVideos : 122,
                                    documentationLink : 'https://www.datacamp.com/'
                    },
                 {
                                    title : 'Machine Learning with Scikit-Learn',
                                    attention : 'Master machine learning with Scikit-Learn in this hands-on course, learning to build and deploy predictive models with ease.',
                                    description : 'The "Machine Learning with Scikit-Learn" course provides a thorough introduction to machine learning techniques using Scikit-Learn, one of Python most popular libraries. You will learn how to implement and optimize various algorithms, including classification, regression, and clustering. The course covers essential concepts like model evaluation, feature selection, and hyperparameter tuning, offering practical experience through real-world projects. By the end, you will be equipped to build, evaluate, and deploy machine learning models, gaining valuable skills for data-driven decision-making and advancing your career in data science.',
                                    picture : './assets/images/machine learning.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLVHgQku8Z9348d6xguTn8zbcUYntz3dQG&si=qNiH3y-4UZgQhteV',
                                    numberOfVideos : 19,
                                    documentationLink : 'https://scikit-learn.org/stable/user_guide.html'
                    },
                 {
                                    title : 'Data Analysis with Pandas and NumPy',
                                    attention : 'Master data analysis with Pandas and NumPy, learning to efficiently clean, manipulate, and analyze data for actionable insights',
                                    description : 'The "Data Analysis with Pandas and NumPy" course offers a deep dive into two powerful Python libraries essential for data analysis. You will learn to use Pandas for data manipulation, cleaning, and transformation, while leveraging NumPy for numerical computations and array operations. The course covers practical techniques for handling and analyzing large datasets, including data aggregation, statistical analysis, and visualization. Through hands-on exercises and real-world projects, you will gain the skills to efficiently process and analyze data, providing valuable insights and enhancing your data analysis capabilities.',
                                    picture :  './assets/images/Data Analysis with Pandas and NumPy.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL9n0l8rSshSnragNblKDBsT8Xu3otp3jA&si=K1qJbe6hGKL8JKWG',
                                    numberOfVideos : 32,
                                    documentationLink : 'https://www.kaggle.com/learn'
                    },
                 {
                                    title : 'Deep Learning with TensorFlow',
                                    attention : 'Unlock the potential of deep learning with TensorFlow, mastering neural networks to build and deploy advanced AI models effortlessly',
                                    description : 'The "Deep Learning with TensorFlow" course offers an in-depth exploration of deep learning techniques using TensorFlow, a leading framework for building AI models. You will learn to design, train, and deploy neural networks for complex tasks such as image and speech recognition. The course covers key concepts including deep neural networks, convolutional layers, and optimization strategies, providing hands-on experience through practical projects. By the end, you will have the skills to create advanced AI solutions and apply deep learning techniques to solve real-world problems effectively.',
                                    picture : './assets/images/tensorFlow.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLeo1K3hjS3uu7CxAacxVndI4bE_o3BDtO&si=-sLwD0VLEYjOvkAI',
                                    numberOfVideos : 57,
                                    documentationLink : 'https://www.tensorflow.org/learn'
                    },
                 
                  {
                                    title : 'Introduction to R Programming',
                                    attention : 'Get started with R programming, learning to analyze and visualize data with ease through practical examples and essential techniques',
                                    description : 'The "Introduction to R Programming" course provides a foundational understanding of R, a powerful language for statistical computing and data analysis. You will learn the basics of R programming, including data manipulation, statistical analysis, and visualization techniques. The course covers key R functions, data structures, and packages, offering practical experience through hands-on exercises and real-world examples. By the end, you will be equipped to perform data analysis, create visualizations, and leverage R capabilities to tackle various data-driven challenges effectively.',
                                    picture : './assets/images/R.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLEiEAq2VkUUKAw0aAJ1W4jpZ1q9LpX4yG&si=1gQCXx28GzsW3bNT',
                                    numberOfVideos : 36,
                                    documentationLink : 'https://www.datacamp.com/courses/tech:r'
                    },
                 
            
                ]
            
            },
            {
                title : 'Soft Skills',
                picture : './assets/images/soft-skills.gif',
                introduction : 'En,hance your professional journey with our soft skills courses, focusing on communication, teamwork, and leadership development.',
                number : 11,
                courses : [
                    {
                        title : 'Communication Skills',
                        attention : 'Boost your career with our communication skills course! Master effective speaking, active listening, and persuasive techniques for professional success.',
                        description : 'Discover our communication skills course, designed to enhance your ability to convey ideas effictively. Begin with foundational topics like building rapport and mastering body language. As your progress, delev into advanced techniques such as persuasive speaking, managing difficult conversations, and active listening strategies. By the end of this course, you will be adept at communicating clearly and confidently in various professional and personal settings.',
                        picture : './assets/images/communication-skills.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLm_MSClsnwm-AIEbpyIxoTT8t7UzkHSYC&si=6-mM6FY-5KkwJRE1',
                        numberOfVideos : 134,
                        documentationLink : 'https://www.cadreworks.org/resources/communication-skills'
                    },
                    {
                        title : 'Emotional Intelligence',
                        attention : 'Unlock the power of emotional intelligence with our course! Learn to manage emotions, enhance empathy, and improve interpersonal relationships.',
                        description : 'Explore our emotional intelligence course, designed to help you develop key skills for managing and understanding emotions. Begin with core concepts like self-awareness and self-regulation. As you progress, delve into more compelx topics such as empathy, emotional resilience, and effective relationship management. By the end of this course, you will be adept at navigating your own emotions and enhancing your interactions with others, ready to build stronger personal and professional connections.',
                        picture : './assets/images/emotional-intelligence.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL1E0IMGl4strAdjcCJ-NgIERwjrw3At8J&si=l2D4pvl-xVcryhdR',
                        numberOfVideos : 17,
                        documentationLink : 'https://www.psychologytoday.com/us/basics/emotional-intelligence'
                    },
                    {
                        title : 'Leadership and Management',
                        attention : 'Transform your career with our leadership and management course! Learn to inspire teams, drive strategic decisions, and enhance organizational success',
                        description : 'Discover our leadership and management course, crafted to equip you with essential skills for leading teams and managing projects. Begin with foundational topics like effective communication and team motivation. As you advance, explore more complex areas sucb as strategic decision-making, conflict resolution, and organizational change. By the end of this course, you will be skilled in leading teams and driving organizational success, ready to tackle leadership challenges with confidence.',
                        picture : './assets/images/leadership-management.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLC2PbGU4iq494KcUL8cxIF5_k9C88MH2F&si=TwuRAclGbayzqMXq',
                        numberOfVideos : 72,
                        documentationLink : 'https://hbr.org/'
                    },
                    {
                        title : 'Time Management',
                        attention : 'Master your schedule with our time management course! Learn strategies to boost productivity, prioritize tasks, and achieve your goals.',
                        description : ': Discover our time management course, designed to help you optimize your productivity and achieve your goals efficiently. Start with basic techniques for setting priorities and organizing tasks. As you progress, delve into advanced strategies such as creating effective schedules, overcoming procrastination, and managing deadlines. By the end of this course, you will be adept at managing your time effectively, ready to boost your efficiency and achieve a balanced, productive lifestyles.',
                        picture : './assets/images/time-management.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL1O57nCUQ-e8HXQ4sFMhjCWCtB0czLEOP&si=QXIIqjselH97mpnT',
                        numberOfVideos : 12,
                        documentationLink : 'https://www.coursera.org/learn/work-smarter-not-harder'
                    },
                    {
                        title : 'Problem-Solving and Critical Thinking',
                        attention : 'Enhance your skills with our problem-solving and critical thinking course! Learn to analyze issues, develop solutions, and make informed decisions.',
                        description : 'Explore our problem-solving and critical thinking course, designed to develop your ability to tackle complex challenges and make sound decisions. Begin with foundational skills like identifying issues and analyzing data. As you advance, dive into more sophisticated techniques such as evaluating solutiosn, questioning assumptions, and applying strategic thinking. By the end of this course, you will be skilled in navigating problems with clarity and confidence, ready to apply these skills in various contexts.',
                        picture : './assets/images/problem-solving.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLtKNX4SfKpzX_bhh4LOEWEGy3pkLmFDmk&si=qMhFENiOkg8MyPTu',
                        numberOfVideos : 35,
                        documentationLink : 'https://www.coursera.org/learn/critical-thinking-skills'
                    },
                    
                    {
                        title : 'Negotiation and Persuasion',
                        attention : 'Master negotiation and persuasion with our course! Learn strategies to influence others, handle objections, and achieve win-win outcomes. Enroll now!',
                        description : 'Dive into our Negotiation and Persuasion course, designed to enhance your ability to influence and reach agreements effectively. Begin by learning key concepts like understanding interests and building rapport. As you progress, explore advanced tactics such as overcoming resistance and crafting compelling arguments. By the end of the course, you will be adept at negotiating favorable outcomes and persuading others, ready to apply these techniques in diverse scenarios. ',
                        picture : './assets/images/Negotiation and Persuasion.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL6vWkk9L7LeHKze5em0hAzvagJ1oIQv_P&si=U57mh0odU1ciGTkC',
                        numberOfVideos : 36,
                        documentationLink : 'https://www.negotiationacademy.com/'
                    },
                    {
                        title : 'Customer Service Skills',
                        attention : 'Elevate your customer service skills with our course! Master effective communication, problem-solving, and creating exceptional customer experiences. Enroll now!',
                        description : 'Explore our Customer Service Skills course, designed to refine your ability to deliver exceptional service and enhance client satisfaction. Start with essential skills such as active listening and empathetic communication. As you progress, delve into advanced strategies like handling difficult situations and personalizing interactions. By the end of this course, you will be proficient in creating positive customer experiences and addressing needs effectively, prepared eo excel in any service-oriented role.',
                        picture : './assets/images/Customer Service Skills.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLQS8BRecii9FJeCRWbJ3qnHmD7yNS85mK&si=hdfjFRvZsOrQYg-Y',
                        numberOfVideos : 24,
                        documentationLink : 'https://www.serviceskills.com/'
                    },
                    {
                        title : 'Conflict Resolution',
                        attention : 'Transform conflicts into opportunities with our Conflict Resolution course—learn effective strategies for mediation, negotiation, and achieving harmonious outcomes. Enroll today!',
                        description : ' Explore our conflict resolution course, designed to teach you essential skills for managing and resolving disputes effectively. You’ll start with the basics, including identifying conflict sources, understanding different perspectives, and active listening techniques. As you advance, you will delve into more complex strategies such as negotiation, mediation, and maintaining positive relationships in challenging situations. By the end of the course, you’ll be proficient in resolving conflicts, fostering collaboration, and maintaining harmony in both personal and professional settings.',
                        picture : './assets/images/conflict-resolution.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL3OCqDPD8GYNWc1TTi_8aK0O0KQid1C3c&si=x1E7COqZ5VjsOcTg',
                        numberOfVideos : 10,
                        documentationLink : 'https://www.crnhq.org/'
                    },
                    {
                        title : 'Cultural Competence',
                        attention : 'Boost your global awareness with our Cultural Competence course! Learn to navigate diverse environments, enhance communication, and build stronger connections',
                        description : 'Explore our Cultural Competence course, designed to equip you with essential skills for understanding and interacting with diverse cultures. You’ll start by learning about cultural awareness, the impact of biases, and effective cross-cultural communication. As you progress, you will explore complex topics like adapting to cultural norms, resolving misunderstandings, and promoting inclusivity. By the end of the course, you’ll be proficient in navigating cultural differences with ease, ready to build meaningful connections and thrive in global environments.',
                        picture : './assets/images/Cultural Competence.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLdtDxud3eTk8JwXrC6dkyb14vaer6x8W3&si=omclbkF4ecg2LAdn',
                        numberOfVideos : 6,
                        documentationLink : 'https://culturalq.com/'
                    },
                    {
                        title : 'Stress Management',
                        attention : 'Master techniques to handle stress effectively with our Stress Management course. Achieve balance, boost productivity, and enhance well-being!',
                        description : 'Discover effective stress management techniques with our comprehensive course! This course is designed to help you understand the root causes of stress and how to reduce its impact on your daily life. You’ll begin by exploring relaxation methods, time management strategies, and identifying personal stress triggers. As you advance, you will dive deeper into topics such as mindfulness, coping mechanisms, and building emotional resilience. By the end of the course, you will be equipped with the skills to manage stress confidently and maintain a healthy work-life balance.',
                        picture : './assets/images/stresss.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLhhahsPHBzrzENt1wELU2uRqRWh407wZ2&si=aFF-JiFWzC7Kss4X',
                        numberOfVideos : 6,
                        documentationLink : 'https://www.mindfulnesscds.com/'
                    },
                    
                    
                    {
                        title : 'Career Development',
                        attention : 'Unlock your potential with our career development course! Gain skills, set goals, and advance confidently in your professional journey.',
                        description : 'Explore our career development course designed to guide you through every stage of professional growth. You will start by identifying your career goals and enhancing your skills. As you advance, you will learn advanced techniques for networking, resume building, and interview preparation. By the end of the course, you will have a clear career path, practical tools for advancement, and the confidence to achieve your professional ambitions.',
                        picture : './assets/images/career.jpeg',
                        youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLNrLTRCLIL9vylwoUuMRGrfK2m1GDMc9D&si=vTOICjwI0QqNYe-j',
                        numberOfVideos : 42,
                        documentationLink : 'https://careerfoundry.com/'
                    }
                ]
            },
            {
                title : 'Marketing',
                picture : './assets/images/marketing.gif',
                introduction : 'Explore diverse marketing strategies wit our extensive range of courses.',
                number : 3,
                courses : [
                    
                    {
                                    title : 'Digital Marketing',
                                    attention : 'Master digital marketing with our course: learn SEO, social media, and analytics to boost your online presence and success.',
                                    description : 'Our "Digital Marketing" course offers a deep dive into essential online strategies. Covering topics such as SEO, content marketing, social media, and data analytics, this course equips you with the skills to enhance your digital presence. You will learn how to create compelling content, optimize websites for search engines, and leverage social platforms for growth. Through practical exercises and real-world case studies, you will gain hands-on experience in driving traffic, engaging audiences, and analyzing performance metrics to achieve measurable results. Perfect for both beginners and experienced marketers aiming to excel in the digital landscape.',
                                    picture : './assets/images/digital-marketing.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLUujFthL-cXkaqSWdcR4C7BtYjED12eLq&si=0UV8Ihzb1wtwyjim',
                                    numberOfVideos : 20,
                                    documentationLink : 'https://www.udemy.com/topic/digital-marketing/'
                    },
                    {
                                    title : 'Marketing Analytics',
                                    attention : 'Unlock powerful marketing insights with our course in Marketing Analytics! Master data-driven strategies, boost ROI, and drive business growth!',
                                    description : 'Our Marketing Analytics course is designed to equip you with essential skills to leverage data for strategic decision-making. You’ll learn to analyze marketing metrics, interpret consumer behavior, and utilize advanced tools to optimize campaigns and drive results. Through hands-on projects and real-world case studies, you will gain practical experience in turning data into actionable insights, enhancing your ability to make informed marketing decisions and maximize ROI. Ideal for marketers looking to deepen their analytical expertise and stay ahead in a data-driven industry.',
                                    picture : './assets/images/marketing-analytics.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL8eNk_zTBST8i0iX_wTBFWgwKpN48t5KF&si=AG6in9xmsuTlWgjD',
                                    numberOfVideos : 36,
                                    documentationLink : 'https://analytics.google.com/analytics/academy/'
                 },
                    {
                                    title : 'Brand Management',
                                    attention : 'Unlock your brand potential! Our course equips you with cutting-edge strategies and insights to master brand management and drive success.',
                                    description : 'Brand management is the strategic process of building, maintaining, and improving a brand reputation, identity, and value in the market. It involves creating a strong brand image that resonates with target audiences, ensuring consistency in messaging, and differentiating the brand from competitors. This course covers key concepts such as brand positioning, brand equity, brand strategy, and the role of branding in driving customer loyalty. Through practical examples and case studies, students will learn how to effectively manage a brand presence, navigate challenges, and enhance its long-term success.',
                                    picture : './assets/images/brand-management.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLP1K8RwG01-eTBzOSDVpQOjiCZ3Z8Hn08&si=zucL-zdIkM0oza7Q',
                                    numberOfVideos : 8,
                                    documentationLink : 'https://www.coursera.org/learn/brand-management'
                    },
                    
                    
                    
            
                ]
            
            },
            {
                title : 'Mobile Apps Programming',
                picture : './assets/images/mobile-apps.gif',
                introduction : 'Master mobile app development for iOS and Android with ease!',
                number : 5,
                courses : [
                    
                 {
                                    title : 'IOS Development ',
                                    attention : 'Unlock the power of iOS development! Learn to create stunning apps for Apple devices with hands-on experience. Enroll today!',
                                    description : 'The iOS Development course offers in-depth training on building applications for Apple devices, including iPhone and iPad. Students will learn to use Swift, Apple’s programming language, and Xcode, its integrated development environment (IDE), to create intuitive and engaging apps. The course covers essential concepts such as user interface design, app architecture, data management, and integrating Apple’s frameworks like Core Data and UIKit. Through hands-on projects, participants will gain the skills to design, develop, test, and deploy high-quality iOS applications to the App Store, preparing them for careers in mobile development.',
                                    picture : './assets/images/IOS.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLSzsOkUDsvdu5Mm67aBYs2YPu2OM4mFzt&si=S_jd2zIVylh5u_oZ',
                                    numberOfVideos : 23,
                                    documentationLink : 'https://developer.apple.com/documentation/'
                    },
                 {
                                    title : 'Android Development',
                                    attention : 'Master Android development! Learn to create dynamic, feature-rich apps for millions of users with hands-on experience. Join today!',
                                    description : 'The Android Development course provides comprehensive training on building applications for Android devices. Students will learn to use Java and Kotlin, the primary programming languages for Android development, along with Android Studio, Google’s official IDE. The course covers key topics such as app architecture, UI/UX design, activity lifecycle, and integrating APIs. Participants will work on hands-on projects, gaining the skills to develop, test, and publish apps on the Google Play Store. By the end of the course, students will be equipped to create functional, high-performance Android applications for various mobile devices.',
                                    picture : './assets/images/android.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PL6Q9UqV2Sf1i4eRuXtfWU9nPJ5YldLXbG&si=cCT2cE2EUQr4oAYt',
                                    numberOfVideos : 79,
                                    documentationLink : 'https://support.google.com/googleplay/android-developer/answer/113513?hl=en'
                    },
                 {
                                    title : 'Cross-Platform Development',
                                    attention : 'Learn cross-platform development! Create apps for both iOS and Android using a single codebase, saving time and effort. Join now!',
                                    description : 'The Cross-Platform Development course teaches students how to build applications that run seamlessly on both iOS and Android using a single codebase. Participants will explore popular frameworks like React Native, Flutter, and Xamarin, learning how to leverage them for efficient app development. The course covers essential topics such as UI design, performance optimization, and integrating platform-specific features while maintaining code reusability. Through hands-on projects, students will gain practical experience in developing cross-platform apps, saving time and resources while delivering high-quality user experiences across multiple devices and operating systems.',
                                    picture : './assets/images/cross-platform.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLPeqhD4jhR8hy83tAG8b2cVBfiHA-J5uO&si=-A5dV2Onqpae84EL',
                                    numberOfVideos : 8,
                                    documentationLink : 'https://developers.arcgis.com/documentation/glossary/cross-platform-development/'
                    },
                 {
                                    title : 'Mobile App Design',
                                    attention : 'Transform your ideas into stunning mobile apps! Master design principles and tools to create user-friendly, visually appealing applications. Enroll today!',
                                    description : 'The Mobile App Design course focuses on creating visually appealing and user-centric mobile applications. Students will learn key design principles, including user experience (UX) and user interface (UI) design, to craft intuitive and engaging apps for both iOS and Android platforms. The course covers essential topics such as wireframing, prototyping, color theory, typography, and usability testing. Through practical projects and design tools, participants will develop skills to design aesthetically pleasing, functional apps that enhance user satisfaction and drive engagement. By the end of the course, students will be equipped to create compelling app designs that stand out in the competitive mobile market.',
                                    picture : './assets/images/mobile-app-design.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLFW6ct83_wC-2m1zPcJr6NBaH-7WVC87G&si=VU1pxQgPkBK_LkoY',
                                    numberOfVideos : 21,
                                    documentationLink : 'https://oddinstitute.com/how-to-prepare-an-app-design-documentation/'
                    },
                 {
                                    title : 'Mobile App Security',
                                    attention : 'Enhance your skills with our Mobile App Security course! Learn to protect apps from threats and vulnerabilities. Enroll now!',
                                    description : 'The Mobile App Security course provides crucial knowledge and skills for protecting applications from security threats and vulnerabilities. Students will learn about common security risks, such as data breaches and malware, and how to implement effective security measures. The course covers topics like encryption, secure coding practices, authentication, and vulnerability assessments. Through practical exercises and real-world case studies, participants will gain hands-on experience in safeguarding mobile applications against cyber attacks, ensuring data privacy, and maintaining user trust. By the end of the course, students will be well-prepared to develop secure mobile apps and protect sensitive information.',
                                    picture : './assets/images/mobile-app-security.jpeg',
                                    youtubePlaylist : 'https://www.youtube.com/embed/videoseries?list=PLwOCu7hSL9MqBeEZUgV5-6n3z4Xw-yaMr&si=CmDCPwJ8kzbC79hi',
                                    numberOfVideos : 31,
                                    documentationLink : 'https://owasp.org/www-project-mobile-app-security/'
                    }
                 
                    
                ]
            
            }
            
             
        ];
        console.log('Categories data : ', categories);
        return of(categories);
    }
}