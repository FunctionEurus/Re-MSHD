import { Injectable } from '@nestjs/common';
import { Info } from '../const';
import { Test } from './entities/disaster.eneity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { stringify } from 'querystring';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { CreateDisasterDto } from './dto/create-disaster.dto/create-disaster.dto';
import { RegionCode } from './entities/region.entity';

@Injectable()
export class DisasterService {
  // 应该是在此处实现转换的逻辑
  constructor(
    private readonly info: Info,
    @InjectRepository(Test)
    private readonly disasterRepository: Repository<Test>,
    @InjectRepository(RegionCode)
    private readonly regionRepository: Repository<RegionCode>,
  ) {}

  async findLocation(code: string) {
    let locationcode = code.substring(0, 12);
    return await this.regionRepository.findOne({
      where: { code: locationcode },
    });
  }

  findTime(code: string) {
    // 13-26
    const sourcecode = code.substring(12, 26);
    // let time = '';

    const year = parseInt(sourcecode.substring(0, 4));
    const month = parseInt(sourcecode.substring(4, 6)) - 1; // 0-based month
    const day = parseInt(sourcecode.substring(6, 8));
    const hours = parseInt(sourcecode.substring(8, 10));
    const minutes = parseInt(sourcecode.substring(10, 12));
    const seconds = parseInt(sourcecode.substring(12, 14));

    if (
      isNaN(year) ||
      isNaN(month) ||
      isNaN(day) ||
      isNaN(hours) ||
      isNaN(minutes) ||
      isNaN(seconds)
    ) {
      console.log('Invalid numeric values in the input string.');
      return null;
    }

    return new Date(year, month, day, hours, minutes, seconds);
  }

  findSource(code: string) {
    // 27,28,29
    const sourcecode = code.substring(26, 29);
    let source = '';
    if (sourcecode[0] === '1') {
      for (let i = 0; i < this.info.source_bussiness_code.length; i++) {
        if (this.info.source_bussiness_code[i] === sourcecode) {
          source = this.info.source_bussiness_word[i];
        }
      }
    } else if (sourcecode[0] === '2') {
      for (let i = 0; i < this.info.source_sense_code.length; i++) {
        if (this.info.source_sense_code[i] === sourcecode) {
          source = this.info.source_sense_word[i];
        }
      }
    } else if (sourcecode[0] === '3') {
      if (this.info.source_else_code[0] === sourcecode) {
        source = '其他';
      }
    } else {
      source = '来源码错误';
    }

    return source;
  }

  findCarrier(code: string) {
    let carrier = '';
    if (code[29] === '0') {
      carrier = '文字';
    } else if (code[29] === '1') {
      carrier = '图像';
    } else if (code[29] === '2') {
      carrier = '音频';
    } else if (code[29] === '3') {
      carrier = '视频';
    } else if (code[29] === '4') {
      carrier = '其他';
    }
    return carrier;
  }

  findDisaster(code: string) {
    // 31,32,33
    const sourcecode = code.substring(30, 36);
    let info = '';
    if (sourcecode[0] === '1') {
      for (let i = 0; i < this.info.info_earthquake_code.length; i++) {
        if (this.info.info_earthquake_code[i] === sourcecode.substring(0, 3)) {
          info += this.info.info_earthquake_word[i];
        }
      }
      for (let i = 0; i < this.info.indicator_earthquake_code.length; i++) {
        if (
          this.info.indicator_earthquake_code[i] === sourcecode.substring(3, 6)
        ) {
          info += this.info.indicator_earthquake_word[i];
        }
      }
    } else if (sourcecode[0] === '2') {
      for (let i = 0; i < this.info.info_people_code.length; i++) {
        if (this.info.info_people_code[i] === sourcecode.substring(0, 3)) {
          info += this.info.info_people_word[i];
        }
      }
      for (let i = 0; i < this.info.indicator_people_code.length; i++) {
        if (this.info.indicator_people_code[i] === sourcecode.substring(3, 6)) {
          info += this.info.indicator_people_word[i];
        }
      }
    } else if (sourcecode[0] === '3') {
      for (let i = 0; i < this.info.info_house_code.length; i++) {
        if (this.info.info_house_code[i] === sourcecode.substring(0, 3)) {
          info += this.info.info_house_word[i];
        }
      }
      for (let i = 0; i < this.info.indicator_house_code.length; i++) {
        if (this.info.indicator_house_code[i] === sourcecode.substring(3, 6)) {
          info += this.info.indicator_house_word[i];
        }
      }
    } else if (sourcecode[0] === '4') {
      for (let i = 0; i < this.info.info_lifeline_code.length; i++) {
        if (this.info.info_lifeline_code[i] === sourcecode.substring(0, 3)) {
          info += this.info.info_lifeline_word[i];
        }
      }
      for (let i = 0; i < this.info.indicator_lifeline_code.length; i++) {
        if (
          this.info.indicator_lifeline_code[i] === sourcecode.substring(3, 6)
        ) {
          info += this.info.indicator_lifeline_word[i];
        }
      }
    } else if (sourcecode[0] === '5') {
      for (let i = 0; i < this.info.info_secondary_code.length; i++) {
        if (this.info.info_secondary_code[i] === sourcecode.substring(0, 3)) {
          info += this.info.info_secondary_word[i];
        }
      }
      for (let i = 0; i < this.info.indicator_secondary_code.length; i++) {
        if (
          this.info.indicator_secondary_code[i] === sourcecode.substring(3, 6)
        ) {
          info += this.info.indicator_secondary_word[i];
        }
      }
    }
    return info;
  }

  async findOne(id: string) {
    let regionresult: string;
    if (id.length == 36) {
      let result =
        this.findTime(id) +
        this.findSource(id) +
        this.findCarrier(id) +
        this.findDisaster(id);

      await this.findLocation(id).then((response) => {
        regionresult =
          response.province +
          response.city +
          response.country +
          response.town +
          response.village;
      });
      return regionresult + result;
    } else {
      const code = await this.disasterRepository.findOne({ where: { id: id } });
      return code;
    }
  }

  async findOneDto(id: string) {
    const code = await this.disasterRepository.findOne({ where: { id: id } });
    return code;
  }

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.disasterRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async create(code: string) {
    const disaster = new CreateDisasterDto();

    await this.findLocation(code).then((response) => {
      let regionresult: string =
        response.province +
        response.city +
        response.country +
        response.town +
        response.village;
      disaster.location = regionresult;
      disaster.location_code = code.substring(0, 12);
    });
    disaster.time = this.findTime(code);
    disaster.time_code = code.substring(12, 26);
    disaster.source = this.findSource(code);
    disaster.source_code = code.substring(26, 29);
    disaster.carrier = this.findCarrier(code);
    disaster.carrier_code = code[29];
    disaster.disaster = this.findDisaster(code);
    disaster.disaster_code = code.substring(30, 36);

    return this.disasterRepository.save(disaster);
  }

  async update(
    id: string,
    updateDisasterDto: CreateDisasterDto,
  ): Promise<Test> {
    const disaster = await this.findOneDto(id);
    // You can update specific properties of the disaster entity here
    disaster.location = updateDisasterDto.location;
    disaster.location_code = updateDisasterDto.location_code;
    disaster.time = updateDisasterDto.time;
    disaster.time_code = updateDisasterDto.time_code;
    disaster.source = updateDisasterDto.source;
    disaster.source_code = updateDisasterDto.source_code;
    disaster.carrier = updateDisasterDto.carrier;
    disaster.carrier_code = updateDisasterDto.carrier_code;
    disaster.disaster = updateDisasterDto.disaster;
    disaster.disaster_code = updateDisasterDto.disaster_code;

    return this.disasterRepository.save(disaster);
  }

  async remove(id: string): Promise<void> {
    const disaster = await this.findOneDto(id);
    await this.disasterRepository.remove(disaster);
  }
}
