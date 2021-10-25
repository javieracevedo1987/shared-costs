import { getExpensesSuccess, getGroupsSuccess } from './actions'
import { groupReducer } from './reducer'

const initialState: IGroupState = {
  selectedGroup: null,
  error: null,
  groups: [],
  expenses: [],
}

describe('User reducer', () => {
  beforeEach(() => {
    groupReducer(initialState, {})
  })

  it('Check groups success state', () => {
    const groups: IGroup[] = [
      { id: 1, name: 'group1' },
      { id: 2, name: 'group2' },
      { id: 3, name: 'group3' },
    ]
    const actual = groupReducer(initialState, getGroupsSuccess(groups))

    expect(actual?.groups).toHaveLength(3)
    expect(actual?.groups[1].name).toEqual(groups[1].name)
  })

  it('Check expense success state', () => {
    const expenses: IExpense[] = [
      {
        description: 'Taxi',
        amount: 10,
        userID: 1,
        groupID: 1,
        createdDate: new Date(),
      },
      {
        description: 'Cine',
        amount: 22,
        userID: 1,
        groupID: 2,
        createdDate: new Date(),
      },
    ]

    const actual = groupReducer(initialState, getExpensesSuccess(expenses))

    expect(actual?.expenses).toHaveLength(2)
  })
})
