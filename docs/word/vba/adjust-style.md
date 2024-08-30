# 调整样式

## 调整表格宽度

先按内容调整，后撑满页面宽度。

```vb
Sub AdjustTables()

    Dim table As Table

    For Each table In ActiveDocument.Tables
        table.AutoFitBehavior 1
    Next table
    
    For Each table In ActiveDocument.Tables
        table.AutoFitBehavior 2
    Next table
    
End Sub
```

## 调整图片宽度

优先撑满页面宽度，若撑满缩放大于60%，则按60%缩放。

```vb
Sub AdjustShapes()

    Dim docWidth, docHeight As Long

    With ActiveDocument.PageSetup
        docWidth = (.PageWidth - .LeftMargin - .RightMargin)
        docHeight = (.PageHeight - .TopMargin - .BottomMargin)
    End With

    Dim inlineShape As InlineShape

    For Each inlineShape In ActiveDocument.InlineShapes

        If inlineShape.Type = wdInlineShapePicture Then

            inlineShape.LockAspectRatio = msoTrue
            inlineShape.Width = docWidth

            If inlineShape.ScaleWidth > 60 Then
                inlineShape.ScaleWidth = 60
            End If

            If inlineShape.Height > docHeight Then
                inlineShape.Height = docHeight
            End If

        End If

    Next

End Sub
```

