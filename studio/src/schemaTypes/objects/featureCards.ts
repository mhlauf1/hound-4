import {defineField, defineType} from 'sanity'
import {DashboardIcon} from '@sanity/icons'

export const featureCards = defineType({
  name: 'featureCards',
  title: 'Feature Cards',
  type: 'object',
  icon: DashboardIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stat',
      title: 'Stat',
      type: 'object',
      fields: [
        defineField({
          name: 'value',
          title: 'Value',
          type: 'string',
          description: 'e.g. "Open 365 Days"',
        }),
        defineField({
          name: 'suffix',
          title: 'Suffix',
          type: 'string',
          description: 'e.g. "+"',
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'button',
            }),
          ],
          preview: {
            select: {title: 'title', media: 'image'},
          },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'headline'},
    prepare({title}) {
      return {title: title || 'Feature Cards'}
    },
  },
})
