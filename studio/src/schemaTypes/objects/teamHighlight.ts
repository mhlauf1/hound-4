import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const teamHighlight = defineType({
  name: 'teamHighlight',
  title: 'Team Highlight',
  type: 'object',
  icon: UsersIcon,
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
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'teamPhoto',
      title: 'Team Photo',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {title: 'headline', media: 'teamPhoto'},
  },
})
