import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import { UpdateCourseDto } from './update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Post()
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

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

  @Patch(':courseId')
  async update(
    @Param('courseId') id: string,
    @Body() updateUserDto: UpdateCourseDto,
  ) {
    const course = await this.coursesService.updateCourse(updateUserDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }
}
