# Performance Optimization TODO

- [x] Implement lazy loading for section components in App.jsx (Hero, Project, About, Services, Contact, Footer, etc.) using React.lazy and Suspense to reduce initial bundle size.
- [x] Optimize ScrollReal.jsx: Reduce animation complexity on mobile, add performance checks, and minimize unnecessary re-renders.
- [ ] Add React.memo to key components (e.g., Header, Hero, ProjectCard, etc.) to prevent unnecessary re-renders.
- [ ] Handle or remove BuggyComponent in App.jsx, as it throws errors during render.
- [ ] Run the app and measure performance using browser dev tools or Lighthouse.
- [ ] Test on mobile devices to ensure optimizations work.
- [ ] Optionally, add bundle analyzer to check bundle sizes.
