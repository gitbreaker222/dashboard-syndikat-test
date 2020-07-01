
# Dashboard Syndikat Test

[Task description]('./docs/task.pdf)

## TODO

- [x] define data in mock-data.json
- [x] fetch data async on load
- [ ] layout detail view
- [ ] layout dashboard view
- [ ] add css lib
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
