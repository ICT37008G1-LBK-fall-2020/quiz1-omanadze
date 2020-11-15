let students1 = [
    { id: 1, name: 'name1', gpa: 2.8 },
    { id: 2, name: 'name2', gpa: 3.8 },
    { id: 3, name: 'name3', gpa: 1.2 },
    { id: 4, name: 'name2', gpa: 2 },
    { id: 5, name: 'name5', gpa: 4 },
    { id: 6, name: 'name5', gpa: 3 }
]
let students2 = [
    { id: 7, name: 'name1', gpa: 2.8 },
    { id: 8, name: 'name2', gpa: 3.8 },
    { id: 9, name: 'name3', gpa: 1.2 },
    { id: 10, name: 'name2', gpa: 2 },
    { id: 11, name: 'name2', gpa: 2 },
    { id: 12, name: 'name5', gpa: 4 },
    { id: 13, name: 'name5', gpa: 3 },
    { id: 14, name: 'name5', gpa: 3 },
    { id: 15, name: 'name5', gpa: 3 }
]

function getTopStudents(studentsArray1, studentsArray2) {
    const sortedStudents = [...studentsArray1, ...studentsArray2].sort((st1, st2) => st2.gpa - st1.gpa);
    const minGpa = sortedStudents[4].gpa;
    let topStudents = [];
    for (let i = 0; i < sortedStudents.length; i++) {
        if (sortedStudents[i].gpa >= minGpa) {
            topStudents.unshift(sortedStudents[i]);
        } else {
            break;
        }
    }
    return topStudents;
}

console.log(getTopStudents(students1, students2));