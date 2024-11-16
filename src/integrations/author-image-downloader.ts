import type { AstroIntegration } from 'astro'
import { getAuthors, downloadFile } from '../lib/notion/client'

export default (): AstroIntegration => ({
  name: 'author-image-downloader',
  hooks: {
    'astro:build:start': async () => {
      const authors = await getAuthors()

      await Promise.all(
        authors.props.items.map((author) => {
          if (!author.profileImg || !author.profileImg.file.url) {
            return Promise.resolve()
          }

          let url!: URL
          try {
            url = new URL(author.profileImg.file.url)
          } catch (err) {
            console.log('Invalid AuthorImage URL')
            return Promise.resolve()
          }

          return downloadFile(url)
        })
      )
    },
  },
})
