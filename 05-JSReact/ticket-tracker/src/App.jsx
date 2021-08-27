import styles from './App.module.scss';
import team from './data/employees';
import EmployeeCard from './components/EmployeeCard';



const App = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Ticket Tracker</h1>
      <section className={styles.cards}>
        {team.map((employee) => < EmployeeCard employee={employee} key={employee.id} />)}
      </section>
    </div>
  );
}

export default App;

// 1. Change title in public/index.html
// 2. Rename src/App.js => App.jsx
// 3. Clear out code from return in App.jsx
// 4. Clear out code from App.css
// 5. Add global reset to index.css
// 6. Install Sass
// 7. Rename App.css => App.module.scss & chnage import