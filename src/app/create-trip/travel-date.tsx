import { Button } from '@/components/Button'
import { formattedDate } from '@/utils/formatDate'
import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ptBR } from '../../utils/localeCalendarConfig'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function TravelDateScreen() {
  const [selectedStartDate, setSelectedStartDate] = useState<DateData | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<DateData | null>(null)

  const handleDayPress = (day: DateData) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(day)
      setSelectedEndDate(null)
    } else {
      if (new Date(day.dateString) > new Date(selectedStartDate.dateString)) {
        setSelectedEndDate(day)
      } else {
        setSelectedStartDate(day)
      }
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 24,
      }}
    >
      <View className="">
        <Text className="font-semibold py-2 text-5xl text-zinc-90 mt-32">Datas da Viagem</Text>
      </View>

      <View className="flex-1 mt-10">
        <Calendar
          renderArrow={(direction: 'right' | 'left') => (
            <Feather size={24} color="#000000" name={`chevron-${direction}`} />
          )}
          headerStyle={{
            borderBottomWidth: 0.5,
            borderBottomColor: '#000000',
            paddingBottom: 10,
            marginBottom: 10,
          }}
          theme={{
            textMonthFontSize: 18,
            textSectionTitleColor: '#000000',
            monthTextColor: '#000000',
            todayTextColor: '#FF814C',
            dayTextColor: '#000000',
            selectedDayBackgroundColor: '#021639',
            selectedDayTextColor: '#000000',
            arrowColor: '#000000',
            backgroundColor: '#EEEEEE',
            calendarBackground: '#EEEEEE',
            textDayStyle: { color: '#000000' },
            textDisabledColor: '#bdbdbd',
            arrowStyle: {
              margin: 10,
              padding: 0,
            },
          }}
          minDate={new Date().toDateString()}
          hideExtraDays
          onDayPress={handleDayPress}
          markingType={'period'}
          markedDates={{
            [selectedStartDate?.dateString || '']: {
              startingDay: true,
              color: '#30AF5B',
            },
            [selectedEndDate?.dateString || '']: {
              endingDay: true,
              color: '#30AF5B',
            },
          }}
        />

        <View className="w-full flex-row justify-between items-center mt-5">
          <View className="flex-row gap-2">
            <Ionicons name="calendar" size={16} color="black" />
            <Text style={{ color: '#000000' }}>
              {selectedStartDate
                ? `Começa em\n${formattedDate(new Date(selectedStartDate.dateString))}`
                : 'Começa em\n'}
            </Text>
          </View>
          <Ionicons name="arrow-forward-circle-outline" size={35} color="black" />
          <View className="flex-row gap-2">
            <Ionicons name="calendar" size={16} color="black" />
            <Text style={{ color: '#000000' }}>
              {selectedEndDate ? `Termina em\n${formattedDate(new Date(selectedEndDate.dateString))}` : 'Termina em\n'}
            </Text>
          </View>
        </View>
      </View>

      <Button onPress={() => router.push('/create-trip/budget')} className="w-full h-16 mb-10">
        <Button.Title className="text-lg">Continue</Button.Title>
      </Button>
    </SafeAreaView>
  )
}
