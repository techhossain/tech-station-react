import { useEffect, useState } from "react"

const useCourses = (path) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch('./course.JSON')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  return [courses];

}
export default useCourses;