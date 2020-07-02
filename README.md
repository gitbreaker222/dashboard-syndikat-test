
# Dashboard Syndikat Test

[Task description]('./docs/task.pdf)

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
- [ ] render detail data
- [x] add open/close mechanics
- [ ] add circle % diagram
  - svg inline-style
- [ ] add components overview page
- [ ] layout dashboard view
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
