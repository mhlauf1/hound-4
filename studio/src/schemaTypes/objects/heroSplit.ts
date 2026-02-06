import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const heroSplit = defineType({
  name: 'heroSplit',
  title: 'Hero Split',
  type: 'object',
  icon: BlockContentIcon,
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
      name: 'description',
      title: 'Description',
      type: 'blockContentTextOnly',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
    }),
    defineField({
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'reviewCount',
      title: 'Review Count Text',
      type: 'string',
      description: 'e.g. "200+ Five-Star Reviews"',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'showBlueAccent',
      title: 'Show Blue Accent Block',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'headline', media: 'image'},
  },
})
