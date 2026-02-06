import {defineField, defineType} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export const marquee = defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Marquee Items',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {
        title: items?.join(' — ') || 'Marquee',
      }
    },
  },
})
