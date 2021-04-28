[Windi CSS]: https://github.com/windicss/windicss

# The Story: by @voorjaar

> After two months of development, I am very happy to tell you that Windi CSS has now entered the stable version stage. From now on, there will be no destructive improvements added, please rest assured to use.

So far, we have implemented the following features:

- support [windi.config.js](/guide/configuration)
- support [official plugins](/plugins/)
- support plugin CSS-in-JS syntax
- support add plugin interfaces
- support [directives `@apply`,` @screen`,`@variants`](/guide/features/directives)
- support preflight
- support [all tailwind utilities](/utilities/)
- A lot of [new features](/guide/features/)

## Beginning

So, now I think I should talk about why I am doing this project.

It is always a pleasant experience to use Tailwind to develop the front-end. I tried other front-end frameworks, but when I met Tailwind, I never changed it. Componentization is the most attractive part for me. You know, you can easily implement an html component and share it with others.

But when I used sapper and Tailwind together, the problem appeared, first of all, the problem of speed. When my project became larger and there were about dozens of components, the initial compilation speed reached 3s, and the hot update speed was more than 1s. It was a very unpleasant experience. When you make a change and realize the delay, I believe you will become crazy just like me.

After that, I created a post on reddit and found that someone was interested in the same thing, so the project started. As it happens, I just learned TypeScript that night, so I decided to adopt it. Now that even I think about it, it still feels incredible. This is the first TypeScript project I have done. It's really amazing.

## Development

I have never read the source code of Tailwind CSS, at least not carefully. I just looked at the Tailwind documentation and wondered how I could solve the same problem and solve it better. You know, the philosophy of Tailwind is to give you a big toolkit, you choose the tools you want to use in it, configure it, and then remember to clean it up after you use it. The question is, with so many toolkits, how do I know what I have used, what results will be produced, and whether it is really cleaned up in the end? So the answer is obvious, you should give me what I want. This will facilitate debugging even if something is wrong.

I can roughly talk about the principle of windicss, which is actually a very simple parsing principle. You can even understand it as a simple programming language. Suppose you enter a className, such as `bg-green-300`, Windi CSS will first match `bg-green-300` in the static dictionary. If it exists, it will return the corresponding css, and if it does not exist, continue dynamic matching. First, Windi CSS will extract `bg` as the key to match whether the key is included in the dynamic utility. If it does, input the entire className to see if css will be generated. If not, the className will be ignored and return. Dynamic utilities use completely different processing methods to Tailwind, that is, unrestricted build. Windicss will be based on your input. First of all, see if it is the static value specified in the configuration. If not, it will guess what type it is based on regular expressions, then generate the corresponding css.

As for how to deal with base styles, we have done some processing on css in advance, so that it can be quickly filtered through html tags, so we can generate a minimized preflight every time. For the base styles added by third-party plugins, we obviously can’t do this, because it will burden developers, so we use css-chosen to purge styles for the base styles of third-party plugins. Because it is fast and small, real-time purge can be achieved.

Of course, there are more detailed questions, you need to read our source code.

## Future

I never thought about replacing Tailwind CSS. In addition to my personal interest, the development of this project is also a personal need. tailwindcss can almost be regarded as a giant now, he has  more than 3,000 commits and more than 100 contributors. But when such an achievement is achieved, changing the track is not an easy thing to do. tailwindcss uses libraries like lodash and postcss, I think this will not change. Switch to typescript? Not sure, I think they should still like their workflow.

In any case, I would like to thank the developers who developed Tailwind for such a good front-end tool. But I also hope that when you encounter a speed bottleneck, or want to experience some new features, give Windi CSS a try.

If you like the project, [give it a star ⭐️][Windi CSS], it will be a great encouragement to me.
