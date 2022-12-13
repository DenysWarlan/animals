import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Animal} from "../../../../core/models";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalComponent {
  @Input() animal: Animal;
}
