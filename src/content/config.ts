//  ------------------------------------------------------
//  ----------  /03-blog/src/content/config.ts  ----------
//  ------------------------------------------------------


import { z, defineCollection } from "astro:content";


const blogCollection = defineCollection({

    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),

        //  relacion
        author: z.string(),
        
        //  relacion
        tags: z.array(z.string()),

    })
})


export const collections = {
    blog: blogCollection
}
