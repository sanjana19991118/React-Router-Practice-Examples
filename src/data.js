const staticLeftSideBarData = [
  {title : 'Home', toggle : true , linkRoute : '/' },
  {title : 'My Request', toggle : false , linkRoute : '/myrequests'},
  {title : 'OWA Database', toggle : false, linkRoute : '/owadatabase'},
  {title : 'OWA knowledgebase', toggle : false, linkRoute : '/owaknowledgebase'},
  {
    title : 'Administration',
    toggle : false,
    key : 'menu',
    menu : [
      {title : 'Vendor Management', toggle : false },
      {title : 'PO Configuration' ,  toggle : false},
      {
        title : 'Lookup Tables',
        toggle : false, 
        key : 'subMenu',
        menu : [
          {title : 'Analysis techniques', toggle : false},
          {title : 'Import Admin Data', toggle : false},
          {title : 'Export Admin Data', toggle : false},
          {title : 'External Customer', toggle : false},
          {title : 'Device Apps', toggle : false},
          {title : 'Implanter Model', toggle : false},
          {title : 'Project Type', toggle : false},
          {title : 'Device Apps', toggle : false},
        ],
  },
  {
    title : 'Email',
    toggle : false,
    key : 'subMenu',
    menu : [
      {title : 'OWA Announcements' , toggle : false},
      {title : 'OWA Announcements Group', toggle : false},
      {title : 'Email Announcements', toggle : false},
      {title : 'template', toggle : false},
    ],
  },
  {title : 'Wafer from Template' , toggle : false},
  ],
 },
]

export { staticLeftSideBarData };