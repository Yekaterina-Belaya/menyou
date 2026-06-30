import {
  Component,
  inject,
  signal,
  computed
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FeedbackService } from '@features/recipes/services/recipe-feedback.service';


interface DialogData {
  userId: string;
}

@Component({
  selector: 'app-feedback-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './feedback-dialog.html',
  styleUrls: ['./feedback-dialog.scss']
})
export class FeedbackDialog {
  private dialogRef = inject(MatDialogRef<FeedbackDialog>);
  private feedbackService = inject(FeedbackService);

  data = inject<DialogData>(MAT_DIALOG_DATA);

  reasons = [
    'Не люблю такие ингредиенты',
    'Слишком долго готовить',
    'Слишком сложно',
    'Не подходит моей диете',
    'Уже готовил(а)',
    'Другое'
  ];

  selected = signal<string[]>([]);
  customReason = signal('');

  otherSelected = computed(() =>
    this.selected().includes('Другое')
  );

  toggle(reason: string, checked: boolean) {

    if (checked) {
      this.selected.update(v => [...v, reason]);
    } else {
      this.selected.update(v => v.filter(x => x !== reason));
    }

  }

  save() {

    const preferences = this.selected()
      .filter(r => r !== 'Другое');

    if (this.otherSelected() && this.customReason().trim()) {
      preferences.push(this.customReason().trim());
    }

    this.feedbackService.saveFeedback({
      userId: this.data.userId,
      preferences
    }).subscribe(() => {
      this.dialogRef.close(true);
    });

  }

  skip() {
    this.dialogRef.close(false);
  }

}
