import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId) {
    const course = await this.coursesService.getCourse(courseId);
    return course;
  }

  @Post()
  async setCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.setCourse(createCourseDto);
    return course;
  }
}
