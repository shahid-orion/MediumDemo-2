import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'Approved',
      title: 'approved',
      type: 'boolean',
      description: 'comments wont show without approval!',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      // type: 'string',
      type: 'text',
    }),
    defineField({
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
    }),
  ],
})
