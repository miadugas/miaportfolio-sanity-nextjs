export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60060fd8e6f31adbe128687e',
                  title: 'Sanity Studio',
                  name: 'miaportfolio-sanity-nextjs-studio',
                  apiId: '86acc734-4b37-402b-9ca1-4c495a76a937'
                },
                {
                  buildHookId: '60060fd8a9166e05c563268d',
                  title: 'Landing pages Website',
                  name: 'miaportfolio-sanity-nextjs',
                  apiId: '1a2d2d93-9ae8-4e80-8696-40193d5b033e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miadugas/miaportfolio-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://miaportfolio-sanity-nextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
