
# Dashboard Syndikat Test

[Task description]('./docs/task.pdf')

## Current state

[preview]('./docs/2020-07-04%2000-13%20preview.webm')  
![preview](./docs/2020-07-04%2000-13%20preview.webm)

## TODO

- [x] define data in mock-data.json
- [x] fetch data async on load
- [x] layout detail view
- [x] add css lib
  - pure.css
- [x] define css variables
  - [x] colors
  - font-families
  - font-sizes
- [x] render detail data
  - [ ] calculate remaining days
- [x] add open/close mechanics
- [x] add circle % diagram
  - svg inline-style
- [x] add icons
- [ ] add components overview page
- [x] layout dashboard view
  - [ ] week diagram
  - [ ] messages
  - [ ] objects list details and legend
- [ ] config eslint/prettier
- [ ] write tests (for format component)
- [ ] write demo graphQl-queries for dashboard-/detail-view each
  - https://countries.trevorblades.com/
  -  
```
  {
  continents(filter: {code: {ne: "AS"}}) {
  	name
    code
    countries {
      name
      code
      native
      phone
      capital
      currency
      languages { code }
      emoji
      emojiU
      states { name }
    }
  }
}
```

---

[*Original CRA - Readme*](./docs/README%20CRA.md)
