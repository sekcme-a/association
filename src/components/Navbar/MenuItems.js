export const MenuItems = [
  {
    type: "main",
    title: "홈",
    child: false,
    path: "/"
  },
  {
    type: "main",
    title: '체육회안내',
    child: true,
    // path: '/info',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: "체육회안내",
    subtitle: '총재 인삿말',
    path: '/info/greet',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: "체육회안내",
    subtitle: '설립목적/연혁',
    path: '/info/purpose',
    cName: 'dropdown-link'
  },
    {
    type: "sub",
    title: "체육회안내",
    subtitle: '조직현황',
    path: '/info/status',
    cName: 'dropdown-link'
  },
    {
    type: "sub",
    title: "체육회안내",
    subtitle: '주요사업',
    path: '/info/purpose',
    cName: 'dropdown-link'
  },
        {
    type: "sub",
    title: "체육회안내",
    subtitle: '후원사',
    path: '/info/purpose',
    cName: 'dropdown-link'
  },
  {
    type: "main",
    title: '체육단체',
    // path: '/info',
    cName: 'dropdown-link',
    child: true,
  },
  {
    type: "sub",
    title: '체육단체',
    subtitle: '<전국체육회현황> 수원시',
    path: '/loc/suwon',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '체육단체',
    subtitle: '<종목단체>',
    path: '/type/suwon',
    cName: 'dropdown-link'
  },
    {
    type: "sub",
    title: '체육단체',
    subtitle: '<체육시설> 농구시설',
    path: '/facil/basketball',
    cName: 'dropdown-link'
  },
  {
    type: "main",
    title: '대회정보',
    // path: '/info',
    cName: 'dropdown-link',
    child: true,
  },
  {
    type: "sub",
    title: '대회정보',
    subtitle: '<전국생활체육대회>',
    path: '/competition/info',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '대회정보',
    subtitle: '<대회자료실>',
    path: '/competition/library',
    cName: 'dropdown-link'
  },
  {
    type: "main",
    title: '알림마당',
    // path: '/info',
    cName: 'dropdown-link',
    child: true,
  },
  {
    type: "sub",
    title: '알림마당',
    subtitle: '공지사항',
    path: '/notice/main',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '알림마당',
    subtitle: '언론보도',
    path: '/notice/media',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '알림마당',
    subtitle: '경기및 행사일정',
    path: '/notice/schedule',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '알림마당',
    subtitle: '사진',
    path: '/notice/photo',
    cName: 'dropdown-link'
  },
  {
    type: "sub",
    title: '알림마당',
    subtitle: '동영상',
    path: '/notice/video',
    cName: 'dropdown-link'
  },
{
    type: "sub",
    title: '알림마당',
    subtitle: '뉴스레터',
    path: '/notice/news',
    cName: 'dropdown-link'
  },
]