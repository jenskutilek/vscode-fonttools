export let details = new Map([
    // stream instructions

    [0x40, {
		detail: 'Push n Bytes',
		doc: ''
	}],
    [0x41, {
		detail: 'Push n Words',
		doc: ''
	}],
    [0xb0, {
		detail: 'Push Bytes',
		doc: ''
	}],
    [0xb8, {
		detail: 'Push Words',
		doc: ''
	}],

    // "normal" instructions

    [0x7f, {
		detail: 'Adjust Angle ↥1',
		doc: 'Pops: 1.'
	}],
	[0x64, {
		detail: 'Absolute Value ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x64
Pops        n
Pushes      |n|: absolute value of n (F26Dot6)
=========== ===============================================================
	
Pops n off the stack and pushes onto the stack the absolute value of n.`
	}],
	[0x60, {
		detail: 'Add ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x60
Pops        n1, n2 (F26Dot6)
Pushes      (n2 + n1)
=========== ===============================================================

Pops n1 and n2 off the stack and pushes the sum of the two elements onto
the stack.`
	}],
	[0x27, {
		detail: 'Align Points ↥2',
		doc: 'Pops: 2.'
	}],
	[0x3c, {
		detail: 'Align Relative Point',
		doc: 'Pops: -1.'
	}],
	[0x5a, {
		detail: 'Logical And ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x2b, {
		detail: 'Call Function ↥1',
		doc: 'Pops: 1.'
	}],
	[0x67, {
		detail: 'Ceiling ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x67
Pops        n1: number whose ceiling is desired (F26Dot6)
Pushes      n: ceiling of n1 (F26Dot6)
=========== ===============================================================

Pops n1 and returns n, the least integer value greater than or equal to n1.
For instance, the ceiling of 15 is 15, but the ceiling of 15.3 is 16. The
ceiling of -0.8 is 0. (n is the least integer value greater than or equal
to n1)`
	}],
	[0x25, {
		detail: 'Copy X To Top Stack ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x22, {
		detail: 'Clear Stack',
		doc: 'Pops: -1.'
	}],
	[0x4f, {
		detail: 'Debug Call ↥1',
		doc: 'Pops: 1.'
	}],
	[0x73, {
		detail: 'Delta Exception C1',
		doc: 'Pops: -1.'
	}],
	[0x74, {
		detail: 'Delta Exception C2',
		doc: 'Pops: -1.'
	}],
	[0x75, {
		detail: 'Delta Exception C3',
		doc: 'Pops: -1.'
	}],
	[0x5d, {
		detail: 'Delta Exception P1',
		doc: 'Pops: -1.'
	}],
	[0x71, {
		detail: 'Delta Exception P2',
		doc: 'Pops: -1.'
	}],
	[0x72, {
		detail: 'Delta Exception P3',
		doc: 'Pops: -1.'
	}],
	[0x24, {
		detail: 'Get Depth Of Stack ⤓1',
		doc: 'Pops: 0, pushes: 1.'
	}],
	[0x62, {
		detail: 'Divide ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x62
Pops        * n1: divisor (F26Dot6)
			* n2: dividend (F26Dot6)
Pushes      n2 / n1 (F26Dot6)
=========== ===============================================================

Pops n1 and n2 off the stack and pushes onto the stack the quotient
obtained by dividing n2 by n1. Note that this truncates rather than
rounds the value. The TrueType Rasterizer v.1.7 and later will catch any
division-by-zero errors.`
	}],
	[0x20, {
		detail: 'Duplicate Top Stack ↥1 ⤓2',
		doc: 'Pops: 1, pushes: 2.'
	}],
	[0x59, {
		detail: 'End If',
		doc: `=========== ===============================================================
Code Range  0x59
Pops        —
Pushes      —
=========== ===============================================================

Marks the end of an IF[] instruction.`
	}],
	[0x1b, {
		detail: 'Else',
		doc: `=========== ===============================================================
Code Range  0x1B
Pops        —
Pushes      —
=========== ===============================================================

Marks the start of the sequence of instructions that are to be executed if
an IF instruction encounters a FALSE value on the stack. This sequence of
instructions is terminated with an EIF instruction.`
	}],
	[0x2d, {
		detail: 'End Function Definition',
		doc: ''
	}],
	[0x54, {
		detail: 'Equal ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x57, {
		detail: 'Even ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x2c, {
		detail: 'Function Definition ↥1',
		doc: 'Pops: 1.'
	}],
	[0x4e, {
		detail: 'Set Auto Flip Off',
		doc: ''
	}],
	[0x4d, {
		detail: 'Set Auto Flip On',
		doc: ''
	}],
	[0x80, {
		detail: 'Flip Point',
		doc: 'Pops: -1.'
	}],
	[0x82, {
		detail: 'Flip Range Off ↥2',
		doc: 'Pops: 2.'
	}],
	[0x81, {
		detail: 'Flip Range On ↥2',
		doc: 'Pops: 2.'
	}],
	[0x66, {
		detail: 'Floor ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x66
Pops        n1: number whose floor is desired (F26Dot6)
Pushes      n: floor of n1 (F26Dot6)
=========== ===============================================================

Pops n1 and returns n, the greatest integer value less than or equal to n1.`
	}],
	[0x46, {
		detail: 'Get Coordinate On Projection Vector [N|O] ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x46 - 0x47
a           * N: use current position of point p
			* O: use the position of point p in the original outline
Pops        p: point number (uint32)
Pushes      value: coordinate location (F26Dot6)
Uses        zp2, projection_vector
=========== ===============================================================

Measures the coordinate value of point p on the current projection_vector and pushes the value onto the stack.`
	}],
	[0x88, {
		detail: 'Get Info ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x91, {
		detail: 'Get Variation',
		doc: 'Pops: 0, pushes: -1.'
	}],
	[0xd, {
		detail: 'Get Freedom Vector ↥0 ⤓2',
		doc: 'Pops: 0, pushes: 2.'
	}],
	[0xc, {
		detail: 'Get Projection Vector ↥0 ⤓2',
		doc: 'Pops: 0, pushes: 2.'
	}],
	[0x52, {
		detail: 'Greater Than ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x53, {
		detail: 'Greater Than Or Equal ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x89, {
		detail: 'Instruction Definition ↥1',
		doc: 'Pops: 1.'
	}],
	[0x58, {
		detail: 'If ↥1',
		doc: `=========== ===============================================================
Code Range  0x58
Pops        e: stack element (uint32)
Pushes      —
=========== ===============================================================

Tests the element popped off the stack: if it is zero (FALSE), the
instruction pointer is jumped to the next ELSE or EIF instruction in the
instruction stream. If the element at the top of the stack is nonzero
(TRUE), the next instruction in the instruction stream is executed.
Execution continues until an ELSE instruction is encountered or an EIF
instruction ends the IF. If an else statement is found before the EIF, the
instruction pointer is moved to the EIF statement.`
	}],
	[0x8e, {
		detail: 'Set Instruction Execution Control ↥2',
		doc: 'Pops: 2.'
	}],
	[0x39, {
		detail: 'Interpolate Points',
		doc: 'Pops: -1.'
	}],
	[0xf, {
		detail: 'Move Point To Intersection ↥5',
		doc: 'Pops: 5.'
	}],
	[0x30, {
		detail: 'Interpolate Untouched Points [Y|X]',
		doc: ''
	}],
	[0x1c, {
		detail: 'Jump ↥1',
		doc: `=========== ===============================================================
Code Range  0x1C
Pops        offset: number of bytes to move instruction pointer (int32)
Pushes      —
=========== ===============================================================

The signed offset is added to the instruction pointer and execution is
resumed at the new location in the instruction steam. The jump is relative
to the position of the instruction itself. That is, the instruction pointer
is still pointing at the JMPR[] instruction when offset is added to obtain
the new address.`
	}],
	[0x79, {
		detail: 'Jump Relative On False ↥2',
		doc: `=========== ===============================================================
Code Range  0x79
Pops        * e: stack element (uint32)
			* offset: number of bytes to move instruction pointer (int32)
Pushes      —
=========== ===============================================================

In the case where the Boolean is FALSE, the signed offset will be added to
the instruction pointer and execution will be resumed there; otherwise, the
jump is not taken. The jump is relative to the position of the instruction
itself. That is, the instruction pointer is still pointing at the JROF[]
instruction when offset is added to obtain the new address.`
	}],
	[0x78, {
		detail: 'Jump Relative On True ↥2',
		doc: `=========== ===============================================================
Code Range  0x78
Pops        * b: Boolean (uint32)
			* offset: number of bytes to move instruction pointer (int32)
Pushes      —
=========== ===============================================================

Obtains an offset and tests a Boolean value. If the Boolean is TRUE, the
signed offset will be added to the instruction pointer and execution will
be resumed at the address obtained. Otherwise, the jump is not taken. The
jump is relative to the position of the instruction itself. That is, the
instruction pointer is still pointing at the JROT[] instruction when
offset is added to obtain the new address.`
	}],
	[0x2a, {
		detail: 'Loop And Call Function ↥2',
		doc: 'Pops: 2.'
	}],
	[0x50, {
		detail: 'Less Than ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x51, {
		detail: 'Less Than Or Equal ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x8b, {
		detail: 'Maximum ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x8B
Pops        * e1: stack element (uint32)
			* e2: stack element (uint32)
Pushes      maximum of e1 and e2
=========== ===============================================================

Pops two elements, e1 and e2, from the stack and pushes the larger of these
two quantities onto the stack.`
}],
	[0x49, {
		detail: 'Measure Distance [N|O] ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x49 - 0x4A
a           * 0: measure distance in grid-fitted outline
			* 1: measure distance in original outline
Pops        * p1: point number (uint32)
			* p2: point number (uint32)
Pushes      distance (F26Dot6)
Uses        zp1 with point p1, zp0 with point p2, projection_vector
=========== ===============================================================

Measures the distance between outline point p1 and outline point p2. The
value returned is in pixels (F26Dot6).

If distance is negative, it was measured against the projection vector.
Reversing the order in which the points are listed will change the sign of
the result.`
	}],
	[0x2e, {
		detail: 'Move Direct Absolute Point [r|R] ↥1',
		doc: 'Pops: 1.'
	}],
	[0xc0, {
		detail: 'Move Direct Relative Point [m|M <|> r|R Gr|Bl|Wh] ↥1',
		doc: 'Pops: 1.'
	}],
	[0x3e, {
		detail: 'Move Indirect Absolute Point [r|R] ↥2',
		doc: 'Pops: 2.'
	}],
	[0x8c, {
		detail: 'Minimum ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x8C
Pops        * e1: stack element (uint32)
			* e2: stack element (uint32)
Pushes      minimum of e1 and e2
=========== ===============================================================

Pops two elements, e1 and e2, from the stack and pushes the smaller of
these two quantities onto the stack.`
	}],
	[0x26, {
		detail: 'Move X To Top Stack ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0xe0, {
		detail: 'Move Indirect Relative Point [m|M <|> r|R Gr|Bl|Wh] ↥2',
		doc: 'Pops: 2.'
	}],
	[0x4b, {
		detail: 'Measure Pixels Per Em ↥0 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x4B
Pops        —
Pushes      ppem: pixels per em (uint32)
=========== ===============================================================

This instruction pushes the number of pixels per em onto the stack. Pixels
per em is a function of the resolution of the rendering device and the
current point size and the current transformation matrix. This instruction
looks at the projection_vector and returns the number of pixels per em in
that direction.`
	}],
	[0x4c, {
		detail: 'Measure Point Size ↥0 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x4C
Pops        —
Pushes      pointSize: the size in points of the current glyph (F26Dot6)
=========== ===============================================================

Pushes the current point size onto the stack.

Measure point size can be used to obtain a value which serves as the basis
for choosing whether to branch to an alternative path through the
instruction stream. It makes it possible to treat point sizes below or
above a certain threshold differently.`
	}],
	[0x3a, {
		detail: 'Move Stack-indirect Relative Point [m|M] ↥2',
		doc: 'Pops: 2.'
	}],
	[0x63, {
		detail: 'Multiply ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x63
Pops        n1, n2: multiplier and multiplicand (F26Dot6)
Pushes      n1 * n2 (F26Dot6)
=========== ===============================================================

Pops n1 and n2 off the stack and pushes onto the stack the product of the
two elements.`
	}],
	[0x65, {
		detail: 'Negate ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x65
Pops        n1
Pushes      -n1: negation of n1 (F26Dot6)
=========== ===============================================================

This instruction pops n1 off the stack and pushes onto the stack the
negated value of n1.`
	}],
	[0x55, {
		detail: 'Not Equal ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x5c, {
		detail: 'Logical Not ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x6c, {
		detail: 'No Round [Gr|Bl|Wh] ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x56, {
		detail: 'Odd ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x5b, {
		detail: 'Logical Or ↥2 ⤓1',
		doc: 'Pops: 2, pushes: 1.'
	}],
	[0x21, {
		detail: 'Pop Top Stack ↥1',
		doc: 'Pops: 1.'
	}],
	[0x45, {
		detail: 'Read Control Value Table ↥1 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x45
Pops        location: CVT entry number (uint32)
Pushes      value: CVT value (F26Dot6)
Gets        Control Value Table entry
=========== ===============================================================

Pops a location from the stack and pushes the value in the location
specified in the Control Value Table onto the stack.`
	}],
	[0x7d, {
		detail: 'Round Down To Grid',
		doc: ''
	}],
	[0x7a, {
		detail: 'Round Off',
		doc: ''
	}],
	[0x8a, {
		detail: 'Roll Top Three Stack ↥3 ⤓3',
		doc: 'Pops: 3, pushes: 3.'
	}],
	[0x68, {
		detail: 'Round [Gr|Bl|Wh] ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x43, {
		detail: 'Read Store ↥1 ⤓1',
		doc: 'Pops: 1, pushes: 1.'
	}],
	[0x3d, {
		detail: 'Round To Double Grid',
		doc: ''
	}],
	[0x18, {
		detail: 'Round To Grid',
		doc: ''
	}],
	[0x19, {
		detail: 'Round To Half Grid',
		doc: ''
	}],
	[0x7c, {
		detail: 'Round Up To Grid',
		doc: ''
	}],
	[0x77, {
		detail: 'Super Round 45 Degrees ↥1',
		doc: 'Pops: 1.'
	}],
	[0x7e, {
		detail: 'Set Angle Weight ↥1',
		doc: 'Pops: 1.'
	}],
	[0x85, {
		detail: 'Scan Conversion Control ↥1',
		doc: 'Pops: 1.'
	}],
	[0x8d, {
		detail: 'Scan Type ↥1',
		doc: 'Pops: 1.'
	}],
	[0x48, {
		detail: 'Set Coordinate From Stack FP ↥2',
		doc: `=========== ===============================================================
Code Range  0x48
Pops        * value: distance from origin to move point (F26Dot6)
			* p: point number (uint32)
Pushes      —
Uses        zp2, freedom_vector, projection_vector
=========== ===============================================================

Moves point p from its current position along the freedom_vector so that
its component along the projection_vector becomes the value popped off the
stack.`
	}],
	[0x1d, {
		detail: 'Set CVT Cut In ↥1',
		doc: 'Pops: 1.'
	}],
	[0x5e, {
		detail: 'Set Delta Base In Graphics State ↥1',
		doc: 'Pops: 1.'
	}],
	[0x86, {
		detail: 'Set Dual Projection Vector To Line [r|R] ↥2',
		doc: 'Pops: 2.'
	}],
	[0x5f, {
		detail: 'Set Delta Shift In Graphics State ↥1',
		doc: 'Pops: 1.'
	}],
	[0xb, {
		detail: 'Set Freedom Vector From Stack ↥2',
		doc: 'Pops: 2.'
	}],
	[0x4, {
		detail: 'Set Freedom Vector To Coordinate Axis [Y|X]',
		doc: 'Sets the freedom_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x8, {
		detail: 'Set Freedom Vector To Line [r|R] ↥2',
		doc: 'Pops: 2.'
	}],
	[0xe, {
		detail: 'Set Freedom Vector To Projection Vector',
		doc: ''
	}],
	[0x34, {
		detail: 'Shift Contour By Last Point [2|1] ↥1',
		doc: 'Pops: 1.'
	}],
	[0x32, {
		detail: 'Shift Point By Last Point [2|1]',
		doc: 'Pops: -1.'
	}],
	[0x38, {
		detail: 'Shift Zone By Pixel',
		doc: 'Pops: -1.'
	}],
	[0x36, {
		detail: 'Shift Zone By Last Point [2|1] ↥1',
		doc: 'Pops: 1.'
	}],
	[0x17, {
		detail: 'Set Loop Variable ↥1',
		doc: 'Pops: 1.'
	}],
	[0x1a, {
		detail: 'Set Minimum Distance ↥1',
		doc: 'Pops: 1.'
	}],
	[0xa, {
		detail: 'Set Projection Vector From Stack ↥2',
		doc: 'Pops: 2.'
	}],
	[0x2, {
		detail: 'Set Projection Vector To Coordinate Axis [Y|X]',
		doc: 'Sets the projection_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x6, {
		detail: 'Set Projection Vector To Line [r|R] ↥2',
		doc: 'Pops: 2.'
	}],
	[0x76, {
		detail: 'Super Round ↥1',
		doc: 'Pops: 1.'
	}],
	[0x10, {
		detail: 'Set Reference Point 0 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x11, {
		detail: 'Set Reference Point 1 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x12, {
		detail: 'Set Reference Point 2 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x1f, {
		detail: 'Set Single Width ↥1',
		doc: 'Pops: 1.'
	}],
	[0x1e, {
		detail: 'Set Single Width Cut-In ↥1',
		doc: 'Pops: 1.'
	}],
	[0x61, {
		detail: 'Subtract ↥2 ⤓1',
		doc: `=========== ===============================================================
Code Range  0x61
Pops        n1, n2 (F26Dot6)
Pushes      (n2 - n1): difference
=========== ===============================================================

Pops n1 and n2 off the stack and pushes the difference between the two
elements onto the stack.`
	}],
	[0x0, {
		detail: 'Set Freedom And Projection Vectors To Coordinate Axis [Y|X]',
		doc: 'Sets both projection_vector and freedom_vector to one of the coordinate axes depending on the value of the flag a.'
	}],
	[0x23, {
		detail: 'Swap Top Stack ↥2 ⤓2',
		doc: 'Pops: 2, pushes: 2.'
	}],
	[0x13, {
		detail: 'Set Zone Pointer 0 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x14, {
		detail: 'Set Zone Pointer 1 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x15, {
		detail: 'Set Zone Pointer 2 ↥1',
		doc: 'Pops: 1.'
	}],
	[0x16, {
		detail: 'Set Zone Pointers ↥1',
		doc: 'Pops: 1.'
	}],
	[0x29, {
		detail: 'Untouch Point ↥1',
		doc: 'Pops: 1.'
	}],
	[0x70, {
		detail: 'Write Control Value Table In Font Units ↥2',
		doc: `=========== ===============================================================
Code Range  0x70
Pops        value: number in FUnits (uint32)
			location: Control Value Table location (uint32)
Pushes      —
Sets        Control Value Table entry
=========== ===============================================================

Pops a location and a value from the stack and puts the specified value in
the specified address in the Control Value Table. This instruction assumes
the value is expressed in FUnits and not pixels. The value is scaled before
being written to the table.`
	}],
	[0x44, {
		detail: 'Write Control Value Table In Pixels ↥2',
		doc: `=========== ===============================================================
Code Range  0x44
Pops        * value: number in pixels (F26Dot6 fixed point number)
			* location:   Control Value Table location (uint32)
Pushes      —
Sets        Control Value Table entry
=========== ===============================================================

Pops a location and a value from the stack and puts that value in the
specified location in the Control Value Table. This instruction assumes the
value is in pixels and not in FUnits.`
	}],
	[0x42, {
		detail: 'Write Store ↥2',
		doc: 'Pops: 2.'
	}]
]);
