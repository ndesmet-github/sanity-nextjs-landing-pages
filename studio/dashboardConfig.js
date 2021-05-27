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
                  buildHookId: '60af93805116740ed638dc20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dj4q4gtx',
                  apiId: '1fde1d62-9142-4e42-acb3-fa2a297e433f'
                },
                {
                  buildHookId: '60af9380c92cb10c27f0373c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ht1nrueg',
                  apiId: 'cf963989-742c-4a0f-a33f-ec4e2d15ad18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndesmet-github/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ht1nrueg.netlify.app', category: 'apps'}
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
