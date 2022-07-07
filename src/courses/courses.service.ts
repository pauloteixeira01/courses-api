import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
@Injectable()
export class CoursesService {
  courses = COURSES;

  addCourse(course): Promise<any> {
    return new Promise((resolve) => {
      this.courses.push(course);
      resolve(this.courses);
    });
  }

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId): Promise<any> {
    const id = Number(courseId);
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new HttpException('This course does not exist!', 404);
    }

    return new Promise((resolve) => {
      resolve(course);
    });
  }

  deleteCourse(courseId): Promise<any> {
    const id = Number(courseId);
    const index = this.courses.findIndex((course) => course.id === id);

    if (index === -1) {
      throw new HttpException('This course does not exist!', 404);
    }

    return new Promise((resolve) => {
      this.courses.splice(index, 1);
      resolve(this.courses);
    });
  }
}
